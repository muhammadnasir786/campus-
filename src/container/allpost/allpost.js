import React, { Component } from 'react';
import OnePost from '../onepost/onePost'
import { connect } from 'react-redux'
import * as firebase from 'firebase';
import { Card, CardActions, CardTitle , CardHeader, CardText } from 'material-ui/Card';

class AllPost extends Component {


    render() {
        // console.log(Object.keys(this.props.allPost));
        let userid = firebase.auth().currentUser.uid;

        let demo;

        return (
            <Card>
                <CardTitle title="All Post " subtitle="All Post of all Companies" /> 
            <br/>
                {
                    Object.keys(this.props.allPost).map((allPostKey, index) => {
                        let post = this.props.allPost[allPostKey]
                        // if (post.uid !== userid) {
                        if (this.props.allUsers[userid] != undefined && this.props.allUsers[userid].appliedPost !== undefined) {
                            let appliedPostKey = (Object.values(this.props.allUsers[userid].appliedPost));
                            if (appliedPostKey.indexOf(allPostKey) === -1) {
                                return (<OnePost key={allPostKey} postKey={allPostKey} post={post} role={this.props.role} />);
                            }
                        } else {
                            return (<OnePost key={allPostKey} postKey={allPostKey} post={post} role={this.props.role} />);
                        }
                    })

                }
            </Card>
        );
    }
}
let mapStateToProps = (state) => {
    // console.log(state.CRSReducer.allUsers[firebase.auth().currentUser.uid])
    // console.log(state.CRSReducer.getApplyToJob[firebase.auth().currentUser.uid])
    return {
        allPost: state.CRSReducer.allPost,
        role: state.CRSReducer.role,
        user: state.CRSReducer.allUsers[firebase.auth().currentUser.uid],
        allUsers: state.CRSReducer.allUsers,


    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPost)

// export default AllPost;