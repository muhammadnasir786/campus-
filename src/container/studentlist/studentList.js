import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import OneProfile from "../onepost/oneProfile";


class StudentList extends Component {
    constructor() {
        super();
        this.state = {
            value: 1
        }
    }
    render() {

        // console.log(this.state.value)
        return (
            <Card>
                <CardTitle title="All Student List " subtitle="All Student List in System" /> <hr />

                {/* <h1>All Student List</h1> */}
                {Object.keys(this.props.allUsers).map((val, index) => {
                    let user;
                    this.props.allUsers[val].role === 'student' ? user = this.props.allUsers[val] : null
                    return <OneProfile key={val} user={user} />

                })}
            </Card>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        allUsers: state.CRSReducer.allUsers
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)