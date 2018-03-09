import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './login.css'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RegisterCard from '../signup/signup'
import { connect } from 'react-redux'
import AuthAction from "../../store/actions/authAction";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const style = {
  margin: 10,
};

 let mapStateToProps = (state)=>{
   return {
     na : 'Naisr'

   }
 }
 let mapDispatchToProps = (dispatch)=>{
   return{
     login : (data)=>{ dispatch(AuthAction.loginUser(data))},
     registerShow : ()=>{ dispatch({type : 'REGISTER_SHOW'})}
   }
 }
class LoginCard extends React.Component {
  constructor(){
    super();
    this.state = {
      email : '',
      password : ''
    }
  }
   loginBtn = ()=>{
    //  console.log('nasir')
    this.props.login({ email : this.state.email , password : this.state.password})
  }
  render() {
    return (

      <Card style={{margin : '50px' , border : '1px solid gray' } } zDepth={3}>
        <br />
        <CardTitle title="Access Your Account" subtitle="Login Here !" />
        <br />
        <TextField
          hintText="Email"
          onChange={(e)=> this.setState({email : e.target.value })}
        /><br />
        <TextField
          type='password'
          hintText="Password"
          onChange={(e)=> this.setState({password : e.target.value })}
        /><br />
        <CardActions>
          <Router>
            <div>
             
                <RaisedButton label="Login"
                onClick={this.loginBtn}
                 primary={true} style={style} />
              
              
                <RaisedButton label="Register" 
                onClick = {this.props.registerShow}
                secondary={true} style={style} />
            </div>
          </Router>
        </CardActions>
      </Card>
    )
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginCard) ;