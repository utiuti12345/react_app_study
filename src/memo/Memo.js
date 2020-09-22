import React from 'react';
import {connect} from "react-redux";
import Item from "./Item";

class Memo extends React.Component {
    render() {
        let data;
        let n = 0;
        switch (this.props.mode) {
            case 'default':
                data = this.props.data.map((value) => (
                    <Item key={value.message} value={value} index={n++}/>
                ));
                break;

            case 'find':
                console.log(this.props.fdata);
                data = this.props.fdata.map((value) => (
                    <Item key={value.message} value={value} index={n++}/>
                ));
                break;

            case 'delete':
                data = this.props.data.map((value) => (
                    <Item key={value.message} value={value} index={n++}/>
                ));
                break;

            default:
                data = this.props.data.map((value) => (
                    <Item key={value.message} value={value} index={n++}/>
                ));
                break;
        }

        return (
            <table><tbody>{data}</tbody></table>
        );
    }
}

export default connect((state) => state)(Memo);