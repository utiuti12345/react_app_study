import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    input = '';

    msgStyle = {
        fontSize:"20pt",
        color:"#900",
        margin:"20px 0px",
        padding:"5px",
    };

    inputStyle = {
        fontSize:"20pt",
        padding:"5px",
    };

    constructor(props){
        super(props);
        this.state = {
            message:"type your name."
        };
        this.doCheck = this.doCheck.bind(this);
    }

    doChange(e){
        this.input = e.target.value;
    }

    doSubmit(e){
        this.setState({
            message:"Hello, " + this.input + "!"
        });
        e.preventDefault();
    }

    doCheck(e){
        alert(e.target.value + "は長すぎます。(最大10文字)");
    }

    render() {
        return <div>
            <h1>React</h1>
            <h2>{this.state.message}</h2>
            <Message maxlength="10" onCheck={this.doCheck} />
        </div>
    }
}

class Message extends React.Component {
    inputStyle = {
        fontSize:"20pt",
        padding:"5px",
    };

    constructor(props){
        super(props);
        this.doChange = this.doChange.bind(this);
    };

    doChange(e){
        if(e.target.value.length > this.props.maxlength){
            console.log(this.props.onCheck);
            this.props.onCheck(e);
            e.target.value = e.target.value.substr(0,this.props.maxlength);
        }
    }

    render() {
        return <input type="text" style={this.inputStyle} onChange={this.doChange}/>
    }
}

export default App;
