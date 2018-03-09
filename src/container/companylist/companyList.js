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
import { Card, CardActions, CardHeader, CardText , CardTitle} from 'material-ui/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";

const style = {
    color: 'red',
    fontWeight: 'bold'
}
const cardStyle = {
    margin: 25,
    padding: 0,
    border: '1px solid gray',
    fontSize : 16,
    // fontWeight : 'normal'
}

 class CompanyList extends Component {
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
            <Card style={{ border : '1px solid gray' } } zDepth={3}>
            <CardTitle title="All Company List " subtitle="All Company List in System" /> 
              {/* <h1>All Company List</h1> */}
                    {Object.keys(this.props.allUsers).map((val,index)=>{
                          let user ;
                          this.props.allUsers[val].role === 'company' ? user = this.props.allUsers[val] : null

                                   return user ?  <Card key={val} style={cardStyle} zDepth={3}>
                                                    <List>
                                                        <ListItem
                                                            disabled={true}
                                                            leftAvatar={<Avatar src={'https://s3.amazonaws.com/images.seroundtable.com/google-g-groupon-g-1441368832.gif'} />}
                                                            >
                                                            <p style={{ fontSize : 25  , marginBottom : -15 , marginTop : -5}}>{user.name}</p>
                                                    </ListItem>
                                                    </List>
                                                    <hr/>
                                            <p>Email = <span>{user.email}</span></p>
                                            <p>Role = <span>{user.role}</span></p>
                                            <p>Phone Number = <span>{user.phone}</span></p>
                                            <p>Country = <span>{user.country}</span></p>
                                            <p>City = <span>{user.city}</span></p>
                                        </Card> : null                    
                      })}   
                                   
                   
            </Card>
        </div> 
        )
    }
}
let mapStateToProps = (state)=>{
    return{
        allUsers : state.CRSReducer.allUsers,
        role : state.CRSReducer.role,

    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)