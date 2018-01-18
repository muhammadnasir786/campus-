import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import CRSAction from '../../store/actions/CRSAction';
import * as firebase from "firebase";
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import { connect} from 'react-redux'
const style = {
    height: 275,
    width: 820,
    margin: 20,
  //   marginBottom: '900',
    textAlign: 'center',
    display: 'inline-block',
  };
  let postKey; 
class  YourOnePost extends React.Component {
    constructor(){
        super();
        this.state = {
            isEdit : false,
            title : '',
            salary : '',
            description : ''
        }


    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    
        
    render(){
        postKey = this.props.postKey
        return(
            <Card style={style}>
                        <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={
                                    <Avatar src={require('../sidebar/avatar.png')} />
                                }
                            >
                                {this.props.allUser[firebase.auth().currentUser.uid].name}
                            </ListItem>
                        </List><hr/>
                        {this.state.isEdit ? <div> Job Titile  = <TextField
                        ref = 'title'
                            value={this.state.title}
                            onChange={(e)=>{ this.setState({title : e.target.value})}}
                            // defaultValue={this.props.post.title}
                            floatingLabelText="Job Titile"
                            /><br/>
                         Salary  = <TextField
                        ref = 'salary'                         
                            value={this.state.salary}
                            onChange={(e)=>{ this.setState({salary : e.target.value})}}
                            // defaultValue={this.props.post.salary}
                            floatingLabelText="Salary"
                            /><br/>
                        Job Description:   =<TextField
                        ref = 'description'
                        
                            value={this.state.description}
                            onChange={(e)=>{ this.setState({description : e.target.value})}}
                            // defaultValue={this.props.post.description}
                            floatingLabelText="Job Description"
                            /></div>  
               
               : <div><p> Job Titile  = <b>{this.props.post.title}</b></p>
               <p> Salary  = <b>{this.props.post.salary}</b></p>
               <p> Job Description:   =<b> {this.props.post.description} </b></p></div>}
               
             <RaisedButton label={this.state.isEdit ? 'Save Changes' :'Edit'} primary={true} style={{ margin: 12,}}
             onClick={()=>{
                 this.setState({ 
                     title : this.props.post.title ,
                      salary : this.props.post.salary,
                       description : this.props.post.description})
                this.state.isEdit ?  style.height = 275 : style.height = 375 ;
            
                let postData= {
                    title : this.state.title,
                    salary : this.state.salary,
                    description : this.state.description,
                    uid : firebase.auth().currentUser.uid,
                    appliedstudent  : this.props.appliedstudent
                }
                this.state.isEdit ? this.props.updatePost({key: this.props.postKey , postData}) :null
                 this.setState({ isEdit : !this.state.isEdit})}
             
            
             } />
            <RaisedButton label="Delete " primary={true} style={{ margin: 12,}}
            onClick={()=>{
                    this.props.deletePost(this.props.postKey)
            }}
            /> 
            </Card>
            
        );
    }
}
let mapStateToProps = (state)=>{
    return{
        appliedstudent : state.CRSReducer.allPost[postKey] !== undefined ? state.CRSReducer.allPost[postKey].appliedstudent : null
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        updatePost : (data)=>{ dispatch(CRSAction.updatePost(data))}
    }
}
// export default YourOnePost;
export default connect(mapStateToProps, mapDispatchToProps)(YourOnePost)