import React from 'react';
import './App.css';
import {connect} from "react-redux";

// ステートのマッピング
function mappingState(state) {
    console.log(state.message);
    return state;
}

class App extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        return <div>
            <h1>React</h1>
            <Message/>
            <Button/>
        </div>
    }
}

// ストアのコネクト
// let wrapWithConnet = connect();
// App = wrapWithConnet(App);
App = connect()(App);

// メッセージ表示コンポーネント
class Message extends React.Component{
    style = {
        fontSize:"10pt",
        padding:"20px 5px",
    };

    render() {
        return(
            <p style={this.style}>
                {this.props.message}:{this.props.counter}
            </p>
           )
    }
}

// ストアのコネクト
Message = connect(mappingState)(Message);

// ボタン表示のコンポーネント
class Button extends React.Component{
    style = {
        fontSize:"16pt",
        padding:"5px 10px",
    };

    constructor(props){
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    // ボタンクリックでディスパッチを実行
    doAction(e){
        if(e.shiftKey){
            this.props.dispatch({type:'DECREMENT'});
        }else{
            this.props.dispatch({type:'INCREMENT'});
        }
    }

    render() {
        return(
            <button style={this.style}
                onClick={this.doAction}>
                click
            </button>
        )
    }
}

// ストアのコネクト
Button = connect()(Button);

export default App;
