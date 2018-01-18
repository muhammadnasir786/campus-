import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import CRSAction from '../../store/actions/CRSAction';
import { connect } from "react-redux";


const style = {
    margin : 10,
    border : '2px solid brown',
    fontWeight: 'bold'
}

// const style = {
//   height: 275,
//   width: 820,
//   margin: 20,
// //   marginBottom: '900',
//   textAlign: 'center',
//   display: 'inline-block',
// };

class  OnePost extends React.Component {
    render(){
        return(
            <Card style={style} key={this.props.postKey + 'm'}>
                        <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={
                                    <Avatar src={require('../sidebar/avatar.png')} />
                                }
                            >
                                {this.props.allUser[this.props.post.uid] != undefined ? this.props.allUser[this.props.post.uid].name : null}
                            </ListItem>
                        </List><hr/>
                <p> Job Titile  = <b>{this.props.post.title}</b></p>
                <p> Salary  = <b>{this.props.post.salary}</b></p>
                <p> Job Description:   =<b> {this.props.post.description} </b></p>
                {this.props.role==='student' ?  <RaisedButton label="Apply" primary={true} style={{ margin: 12,}} 
                onClick={()=>{
                    this.props.applyToJob(this.props.postKey);
                }}
                /> : null}
                {this.props.role === 'admin' ?  <RaisedButton label="Delete " primary={true} style={{ margin: 12,}}
                onClick={()=>{
                        this.props.deletePost(this.props.postKey)
                }}
                /> : null}
                {/* {this.props.appliedStdList} */}
            </Card>
            
        );
    }
}
let mapStateToProps = (state)=>{
    return {
        allUser : state.CRSReducer.allUsers,
        role : state.CRSReducer.role
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        deletePost : (data)=>{ dispatch(CRSAction.deletePost(data))},
        applyToJob : (data)=>{ dispatch(CRSAction.applyToJob(data))}
    }
}

// export default OnePost;
export default connect(mapStateToProps, mapDispatchToProps)(OnePost)