import React from "react";
import {deleteMemo, findMemo} from "./Store";
import {connect} from "react-redux";


class FindForm extends React.Component {
    input = {
        fontSize: "12pt",
        color: "#006",
        padding: "1px",
        margin: "5px 0px",
    };
    btn = {
        fontSize: "10pt",
        color: "#006",
        padding: "2px 10px",
    };

    constructor(props){
        super(props);
        this.state = {
            find:''
        };

        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e){
        this.setState({
            find:e.target.value
        });
    }

    doAction(e){
        e.preventDefault();
        let action = findMemo(this.state.find);
        this.props.dispatch(action);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.doAction}>
                    <input type="text" size="10" onChange={this.doChange} style={this.input}
                           value={this.state.message}/>
                    <input type="submit" style={this.btn} value="Find"/>
                </form>
            </div>
        )
    }
}

export default connect((state) => state)(FindForm);