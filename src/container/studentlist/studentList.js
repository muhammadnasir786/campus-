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

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import OneProfile from "../onepost/oneProfile";


class StudentList extends Component {
    constructor(){
        super();
        this.state = {
            value :  1
        }
    }
    render() {
        
        // console.log(this.state.value)
        return (
            <div>
              <h1>All Student List</h1>
                      {Object.keys(this.props.allUsers).map((val,index)=>{
                          let user ;
                          this.props.allUsers[val].role === 'student' ? user = this.props.allUsers[val] : null
                                   return  <OneProfile key={val} user={user}/>
                                     
                      })}
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
    return{
        allUsers : state.CRSReducer.allUsers
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)