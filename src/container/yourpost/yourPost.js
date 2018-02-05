import React, { Component } from 'react';
import YourOnePost from '../onepost/yourOnePost'
import { connect} from "react-redux";
import CRSAction from '../../store/actions/CRSAction';
import  * as firebase from "firebase";
class YourPost extends Component {
    render() {
        return (
           (this.props.role !== 'student') ? 

            <div>

                <h1>Your Post Posts</h1><hr/>
                {Object.keys(this.props.allPost).map((val,index)=>{
                    let post ; 
                if(this.props.allPost[val].uid === firebase.auth().currentUser.uid)
                 {
                     post = this.props.allPost[val]
                     return (<YourOnePost allUser={this.props.allUser} key={val} postKey={val}
                         post={post} deletePost={this.props.deletePost} />)
                }
                     
                    
                })}
            </div> : null 
        );
    }
}

let mapStateToProps = (state)=>{
    return{
        role : state.CRSReducer.role,
        allUser : state.CRSReducer.allUsers,
        allPost : state.CRSReducer.allPost
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        deletePost : (data)=>{ dispatch(CRSAction.deletePost(data))}
    }
}

// export default YourPost;
export default connect(mapStateToProps, mapDispatchToProps)(YourPost)