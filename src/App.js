import React from 'react';
import logo from './logo.svg';
import './App.css';

let data = {title:'Title',message:'this is sample message'};

const SampleContext = React.createContext(data);

class App extends React.Component{
    newdata = {title:'新しいタイトル',message:'新しいメッセージです。'};

    render() {
        return <div>
            <h1>React</h1>
            <Title/>
            <Message/>
            <SampleContext.Provider value={this.newdata}>
                <Title/>
                <Message/>
            </SampleContext.Provider>
        </div>
    }
}

class Title extends React.Component{
    static contextType = SampleContext;

    render() {
        return(
            <div>
                <h2>{this.context.title}</h2>
            </div>
        )
    }
}

class Message extends React.Component{
    static contextType = SampleContext;

    render() {
        return(
            <div>
                <p>{this.context.message}</p>
            </div>
        )
    }
}

export default App;
