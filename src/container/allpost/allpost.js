import React, { Component } from 'react';
import OnePost from '../onepost/onePost'
import { connect } from 'react-redux'
import * as firebase from 'firebase';
class AllPost extends Component {

    
    render() {

        let userid= firebase.auth().currentUser.uid;
        console.log(this.props.userApllyPost)
        let userApplyPostArry = [];
             (this.props.userApllyPost) === undefined ? null : Object.keys(this.props.userApllyPost).map((val,i)=>{
                userApplyPostArry.push(this.props.userApllyPost[val]);   
            });
        console.log(userApplyPostArry);
            let postmainarr = [];
        {Object.keys(this.props.allPost).map((postval,index)=>{
            let post = this.props.allPost[postval]
            if(post.uid !== userid ){
               if(userApplyPostArry !== null){
                userApplyPostArry.map((val,i)=>{
                    console.log(post.uid , val)
                     if(post.uid !==val){
                        postmainarr.push(<OnePost key={val} postKey={val} post={post} role={this.props.role}/>);                        
                     }
                     else{ console.log('No Post ')} 
                 })
               }  
            }else{console.log('No post');}
            
        })}


    //    let applyKeys  = (this.props.user.apply) == undefined ? [] : Object.assign(this.props.user.apply) ;
        // console.log(this.props.user.apply !== undefined)
    //  let userApplyPostArry =  (this.props.userApllyPost) === undefined ? null : Object.keys(this.props.userApllyPost).map((val,i)=>{
    //     return val;   
    // });
    // console.log(userApplyPostArry)
    //    let allPostArry = Object.keys(this.props.allPost);
    //    allPostArry.map((val,i)=>{
    //     let post = this.props.allPost[val];
    //     if(post.uid === userid){
    //         return null;
    //     }else{
    //         // return (<OnePost key={val} postKey={val} post={post} role={this.props.role}/>);   
    //     }
    //     // userApplyPostArry.map((val,i)=>{
    //     //     console.log(this.props.allPost[userApplyPostArry[val]])
    //     //     let post  = this.props.allPost[userApplyPostArry[val]];
    //     // })
    //    })
    //    userApplyPostArry !== null ?  userApplyPostArry.map((val,i)=>{
    //     console.log(this.props.allPost[userApplyPostArry[val]])
    //     let post  = this.props.allPost[userApplyPostArry[val]];
    // }) : null

        
        return (
            <div>
                <h1>All Posts</h1><hr/>


                {postmainarr}


                {Object.keys(this.props.allPost).map((val,index)=>{
                    // let post = this.props.allPost[val]
                    // return (<OnePost key={val} postKey={val} post={post} role={this.props.role}/>);
                    // if(post.uid !== userid){
                    //    userApplyPostArry !== null ? userApplyPostArry.map((val,i)=>{
                    //        console.log(post.uid , this.props.userApllyPost[val])
                    //         if(post.uid !== this.props.userApllyPost[val]){

                    //         }else{ console.log('No Post ')} 
                    //     }) : null
                    // }else{console.log('No post');}
                    
                })}
            </div>
        );
    }
}
let mapStateToProps = (state)=>{
    // console.log(state.CRSReducer.allUsers[firebase.auth().currentUser.uid])
    console.log(state.CRSReducer.getApplyToJob[firebase.auth().currentUser.uid])
    return {
        allPost  :  state.CRSReducer.allPost,
        role : state.CRSReducer.role,
        user : state.CRSReducer.allUsers[firebase.auth().currentUser.uid],
        allUsers : state.CRSReducer.allUsers,
        userApllyPost : state.CRSReducer.getApplyToJob[firebase.auth().currentUser.uid]

    }
}
let mapDispatchToProps = (dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPost)

// export default AllPost;