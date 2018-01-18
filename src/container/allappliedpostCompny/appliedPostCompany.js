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
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import * as firebase from "firebase";
import OnePost from "../onepost/onePost";

const style = {
    color: 'red',
    fontWeight: 'bold'
}
const cardStyle = {
    margin: 25,
    padding: 0,
    border: '2px solid brown',
    fontSize: 16,
    fontWeight: 'normal'
}

class AppliedPostCompany extends Component {
    constructor() {
        super();
        this.state = {
            value: 1
        }
    }
    render() {
        let postkey = [];
        let AllPostCompany;
        (this.props.allPost !== undefined) ? postkey = (Object.keys(this.props.allPost)) : null
        AllPostCompany = postkey.map((postKy, i) => {
            if (this.props.allPost[postKy].uid === firebase.auth().currentUser.uid) {
                let post = this.props.allPost[postKy];
                let studentUids = [];
                (post.appliedstudent !== undefined) ? studentUids = Object.values(post.appliedstudent) : null
                return (
                    <div key={postKy}>
                       
                        <Card style={{ border : '2px solid brown' , margin : 20 , padding : 20}}>
                            <List>
                                <ListItem
                                    disabled={true}
                                    leftAvatar={
                                        <Avatar src={require('../sidebar/avatar.png')} />
                                    }
                                >
                                    {this.props.allUsers[post.uid].name}
                                </ListItem>
                            </List><hr />
                            <p> Job Titile  = <b>{post.title}</b></p>
                            <p> Salary  = <b>{post.salary}</b></p>
                            <p> Job Description:   =<b> {post.description} </b></p>
                            <hr/>
                            {studentUids.map((uid, i) => {
                                let oneStudent = this.props.allUsers[uid];
                                // console.log(oneStudent);
                                return <div key={i}>
                                            <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>{oneStudent.name}</div>
                                                    <div>{oneStudent.email}</div>
                                                    <div>{oneStudent.phone}</div>
                                                    <div>{oneStudent.uni}</div>
                                                    <div>{oneStudent.country}</div>
                                                    <div>{oneStudent.city}</div>
                                            </div>
                                            <hr/>
                                </div>
                                
                            })}
                        </Card>
                    </div>
                )
            }
        })

        // console.log(this.state.value)
        return (
            <div>
                <div>
                    <h1>Applied post Company</h1>
                   
                    {AllPostCompany}
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        allUsers: state.CRSReducer.allUsers,
        role: state.CRSReducer.role,
        allPost: state.CRSReducer.allPost

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppliedPostCompany)