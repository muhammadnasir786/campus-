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
import { Card, CardActions, CardTitle, CardHeader, CardText } from 'material-ui/Card';
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
                    // <Card key={postKy} style={{ border: '1px solid gray' }} zDepth={3}>

                    
                    <Card style={{ border: '1px solid gray', margin: 20, padding: 10 }} key={postKy+'o'}>
                    {/* <CardTitle title="Applied Post Company " subtitle="Student are Apply on Your Post" /> */}
                            <List>
                                <ListItem
                                    disabled={true}
                                    leftAvatar={
                                        <Avatar src={('https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png')} />
                                    }
                                >
                                    {this.props.allUsers[post.uid].name}
                                </ListItem>
                            </List><hr />
                            <p> Job Titile  = <b>{post.title}</b></p>
                            <p> Salary  = <b>{post.salary}</b></p>
                            <p> Job Description:   =<b> {post.description} </b></p>
                            <hr />
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Email</TableHeaderColumn>
                                        <TableHeaderColumn>Phone No :</TableHeaderColumn>
                                        <TableHeaderColumn>University</TableHeaderColumn>
                                        <TableHeaderColumn>Country</TableHeaderColumn>
                                        <TableHeaderColumn>City</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                {
                                    studentUids.map((uid, i) => {
                                    let oneStudent = this.props.allUsers[uid];
                                    // console.log(oneStudent);
                                    return (

                                        <TableRow key={i}>
                                            {console.log(oneStudent)}
                                            <TableRowColumn>{oneStudent.name}</TableRowColumn>
                                            <TableRowColumn>{oneStudent.email}</TableRowColumn>
                                            <TableRowColumn>{oneStudent.phone}</TableRowColumn>
                                            <TableRowColumn>{oneStudent.uni}</TableRowColumn>
                                            <TableRowColumn>{oneStudent.country}</TableRowColumn>
                                            <TableRowColumn>{oneStudent.city}</TableRowColumn>
                                        </TableRow>);


                                    // <div>
                                    //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    //         <div>{oneStudent.name}</div>
                                    //         <div>{oneStudent.email}</div>
                                    //         <div>{oneStudent.phone}</div>
                                    //         <div>{oneStudent.uni}</div>
                                    //         <div>{oneStudent.country}</div>
                                    //         <div>{oneStudent.city}</div>
                                    //     </div>
                                    //     <hr />
                                    // </div>

                                })} </TableBody>
                            </Table>
                        </Card>
                )
            }
        })
        {/* </Card> */}

        // console.log(this.state.value)
        return (
            this.props.role !== 'student' ?
                <div>
                    <Card>
                        <CardTitle title="Applied Post Company " subtitle="Applied Post Compnay" />
                        {/* <h1>Applied post</h1> */}

                        {AllPostCompany}
                    </Card>
                </div> : null
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