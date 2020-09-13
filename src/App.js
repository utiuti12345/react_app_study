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
        this.doChange = this.doChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
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

    render() {
        return <div>
            <h1>React</h1>
            <h2>{this.state.message}</h2>
            <form onSubmit={this.doSubmit}>
                <label>
                    <span style={this.inputStyle}></span>Message:
                    <input type="text" style={this.inputStyle}
                        onChange={this.doChange}
                        required pattern="[A-Za-z ?.,]+"
                           minLength="1" maxLength="10"
                    />
                </label>
                <input type="submit" style={this.inputStyle} value="Click"/>
            </form>
        </div>
    }
}

class Message extends React.Component {
    li = {
        fontSize:"20pt",
        color:"#900",
        margin:"20px 0px",
        padding:"5px",
    };

    render() {
        let content = this.props.children;
        let arr = content.split('。');
        let arr2 = [];
        for (let i = 0; i < arr.length; i++){
            if(arr[i].trim() != ''){
                arr2.push(arr[i]);
            }
        }
        let list = arr2.map((value,key) =>
            <li style={this.li} key={key}>{value}.</li>
        );
        return <div>
            <h2>{this.props.title}</h2>
            <ol>{list}</ol>
        </div>
    }
}

export default App;
