import React, { Component } from 'react';
import OnePost from '../onepost/onePost'
import { connect } from 'react-redux'
import * as firebase from 'firebase';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';


const style = {
    margin : 10,
    border : '2px solid brown',
    fontWeight: 'bold'
}
class AppliedPostStudent extends Component {

    
    render() {
        let AllAppliedPost ;
        let postKey = [] ;
        (this.props.userApplyPost !== undefined) ? postKey =(Object.values(this.props.userApplyPost)) : null
       AllAppliedPost =  postKey.map((postKey,i)=>{
          let post = (this.props.allPost[postKey]);
          console.log(post)
          return (
                    post !== undefined ?
                        <Card key={postKey+'mmm'} style={style}>

                             <List>
                                <ListItem
                                    disabled={true}
                                    leftAvatar={
                                        <Avatar src={require('../sidebar/avatar.png')} />
                                    }
                                    >
                                    {this.props.allUsers !== undefined ? this.props.allUsers[post.uid].name: null }
                                </ListItem>
                            </List><hr />
                            <p> Job Titile  = <b>{post.title}</b></p>
                            <p> Salary  = <b>{post.salary}</b></p>
                            <p> Job Description:   =<b> {post.description} </b></p>
                            
                    </Card> : null
                    
                    );

        //   console.log(post); 
        })
        return (
            <div >
                <h1>Applied Post Student</h1><hr/>
                {
                AllAppliedPost
                    // console.log(this.props.userApplyPost)
                

                }
                    
            </div>
        );
    }
}
let mapStateToProps = (state)=>{
    // console.log(state.CRSReducer.allUsers[firebase.auth().currentUser.uid])
    // console.log(state.CRSReducer.getApplyToJob[firebase.auth().currentUser.uid])
    return {
        allPost  :  state.CRSReducer.allPost,
        role : state.CRSReducer.role,
        user : state.CRSReducer.allUsers[firebase.auth().currentUser.uid],
        allUsers : state.CRSReducer.allUsers,
        userApplyPost : state.CRSReducer.[firebase.auth().currentUser.uid]

    }
}
let mapDispatchToProps = (dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppliedPostStudent)

// export default AllPost;