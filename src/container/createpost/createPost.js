import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from "react-redux";
import CRSAction from '../../store/actions/CRSAction';
import * as firebase from 'firebase';import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const style = {
//   height: 400,
//   width: 800,
  margin: 30,
//   marginBottom: '900',
//   textAlign: 'center',
//   display: 'inline-block',
border : '1px solid gray'
};

class  CreatePost extends React.Component {
    constructor(){
        super();
        this.state = {
            title : '',
            salary : '',
            description  : ''
        }
    }
    render(){
        return(
     this.props.role === 'company' ||  this.props.role === 'admin' ?  
        <div>
              <Card style={style} zDepth={3}>
              <CardTitle title="Create Job Post " subtitle="Create Job Post" /> <hr/>
                        <TextField
                            value = {this.state.title}
                            floatingLabelText="Job Title"
                            onChange={(e)=> this.setState({title : e.target.value })}
                            /><br />
                        <TextField
                            value = {this.state.salary}
                            type='text'
                            floatingLabelText="Salary"
                            onChange={(e)=> this.setState({salary : e.target.value })}
                            /><br />
                        <TextField
                            onChange={(e)=> this.setState({description : e.target.value })}
                            value={this.state.description}
                            floatingLabelText="Job Description"
                            multiLine={true}
                            rows={2}
                            /><br />
                    <RaisedButton label="Cancel " primary={true} style={{ margin: 12,}} />
                    <RaisedButton label="Create Post" primary={true} style={{ margin: 12}} 
                    onClick={()=>{
                        let post = {
                            title : this.state.title,
                            salary : this.state.salary,
                            description  : this.state.description,
                            uid : firebase.auth().currentUser.uid
                        }
                        this.props.addPost(post);
                        this.setState({ title : '' , salary : '', description : ''})

                    }}
                    
                    />
            </Card>
            
         </div> 
         : null
        );
    }
}

let mapStateToProps = (state) =>{
    return { 
        role : state.CRSReducer.role,

    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        addPost : (data)=>{ dispatch(CRSAction.addPost(data))}
    }   
}
// export default CreatePost;
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)