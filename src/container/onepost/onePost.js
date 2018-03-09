import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import CRSAction from '../../store/actions/CRSAction';
import { connect } from "react-redux";
import TextField from 'material-ui/TextField';


const style = {
    margin: 10,
    border: '1px solid gray',
    // fontWeight: 'bold'
}


// const style = {
//   height: 275,
//   width: 820,
//   margin: 20,
// //   marginBottom: '900',
//   textAlign: 'center',
//   display: 'inline-block',
// };
let appliedstudent;

class OnePost extends React.Component {
    constructor() {
        super();
        this.state = {
            isEdit: false,
            title: '',
            salary: '',
            description: '',

        }
    }
    toUpdatePost = () => {
        console.log('To Update');
        let postData;
        this.props.allPost[this.props.postKey].appliedstudent !== undefined ? 
         postData = {
            title: this.state.title,
            salary: this.state.salary,
            description: this.state.description,
            uid: this.props.post.uid,
            appliedstudent: this.props.allPost[this.props.postKey].appliedstudent
        } :
         postData = {
            title: this.state.title,
            salary: this.state.salary,
            description: this.state.description,
            uid: this.props.post.uid,
        }
        this.props.updatePost({ key: this.props.postKey, postData });
        this.setState({ isEdit: !this.state.isEdit })
    }
    toToggleEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit,
            title: this.props.post.title,
            salary: this.props.post.salary,
            description: this.props.post.description
        });
    }
    render() {
        appliedstudent = this.props.allPost[this.props.postKey].appliedstudent
        // console.log(this.props.allPost[this.props.postKey].appliedstudent);
        return (
            <Card style={style} key={this.props.postKey + 'm'} zDepth={2}>
                <List>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar src={('https://s3.amazonaws.com/images.seroundtable.com/google-g-groupon-g-1441368832.gif')} />
                        }
                    >
                        {this.props.allUser[this.props.post.uid] != undefined ? this.props.allUser[this.props.post.uid].name : null}
                    </ListItem>
                </List><hr />
                {this.state.isEdit ?
                    <div> Job Titile  = <TextField
                        value={this.state.title}
                        onChange={(e) => { this.setState({ title: e.target.value }) }}
                        // defaultValue={this.props.post.title}
                        floatingLabelText="Job Titile"
                    /><br />
                        Salary  = <TextField
                            value={this.state.salary}
                            onChange={(e) => { this.setState({ salary: e.target.value }) }}
                            // defaultValue={this.props.post.salary}
                            floatingLabelText="Salary"
                        /><br />
                        Job Description:   =<TextField
                            value={this.state.description}
                            onChange={(e) => { this.setState({ description: e.target.value }) }}
                            // defaultValue={this.props.post.description}
                            floatingLabelText="Job Description"
                        />
                    </div> :
                    <div>
                        <p> Job Titile  = <b>{this.props.post.title}</b></p>
                        <p> Salary  = <b>{this.props.post.salary}</b></p>
                        <p> Job Description:   =<b> {this.props.post.description} </b></p>
                    </div>}
                {this.props.role === 'student' ? <RaisedButton label="Apply" primary={true} style={{ margin: 12, }}
                    onClick={() => {
                        this.props.applyToJob(this.props.postKey);
                    }}
                /> : null}
                {this.props.role === 'admin' ? <div> <RaisedButton label="Delete " primary={true} style={{ margin: 12, }}
                    onClick={() => {
                        this.props.deletePost(this.props.postKey)
                    }}
                />
                    <RaisedButton label={this.state.isEdit ? 'Update' : 'Edit'} primary={true} style={{ margin: 12, }}
                        onClick={() => {
                            let postData
                            this.state.isEdit ?
                                this.toUpdatePost()
                                // console.log(this.props.appliedstudent)
                                : this.toToggleEdit()
                            // this.state.isEdit ? ()=>{
                            // let postData = {
                            //     title: this.state.title,
                            //     salary: this.state.salary,
                            //     description: this.state.description,
                            //     uid: this.props.post.uid,
                            //     appliedstudent: this.props.appliedstudent
                            // }
                            // this.props.updatePost({ key: this.props.postKey, postData });
                            // this.setState({ isEdit: !this.state.isEdit })
                            // } :()=>{

                            //     this.setState({
                            //         isEdit: !this.state.isEdit,
                            //         title: this.props.post.title,
                            //         salary: this.props.post.salary,
                            //         description:this.props.post.description
                            //     })
                            // }
                        }}
                    />
                </div>
                    : null}
                {/* {this.props.appliedStdList} */}
                {
        console.log(this.props.appliedstudent)                    
                }


            </Card>


        );
    }
}
let mapStateToProps = (state) => {
    return {
        allUser: state.CRSReducer.allUsers,
        role: state.CRSReducer.role,
        allPost: state.CRSReducer.allPost

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (data) => { dispatch(CRSAction.deletePost(data)) },
        applyToJob: (data) => { dispatch(CRSAction.applyToJob(data)) },
        updatePost: (data) => { dispatch(CRSAction.updatePost(data)) }

    }
}

// export default OnePost;
export default connect(mapStateToProps, mapDispatchToProps)(OnePost)