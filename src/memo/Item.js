import React from 'react';
import {connect} from "react-redux";

class Item extends React.Component{
    th = {
        fontSize : "14pt",
        backgroundColor:"blue",
        color:"white",
        padding:"5px 20px",
        width:"50px",
    };

    td = {
        fontSize: "14pt",
        backgroundColor:"white",
        color:"darkblue",
        padding:"5px 20px",
        border:"1px solid lightblue",
        minWidth:"300px",
    };

    date = {
        fontSize: "14pt",
        backgroundColor:"white",
        color:"darkblue",
        padding:"5px 20px",
        border:"1px solid lightblue",
        width:"50px",
    };

    render(){
        let d = this.props.value.created;
        let f = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

        return(
            <tr>
                <th style={this.th}>No.{this.props.index}</th>
                <td style={this.td}>{this.props.value.message}</td>
                <td style={this.date}>{f}</td>
            </tr>
        );
    }
}

export default connect()(Item);