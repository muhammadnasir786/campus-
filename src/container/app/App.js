import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Navbar from "../../components/navbar/navbar";
import LoginCard from '../login/login'
import RegisterCard from '../signup/signup'
import NavBar from '../../components/navbar/navbar'
import SideBar from "../sidebar/sideBar";
import OnePost from "../onepost/onePost";import Paper from 'material-ui/Paper';
import AllPost from "../allpost/allpost";
import Profile from "../profile/profile";
import StudentList from "../studentlist/studentList";
import CompanyList from "../companylist/companyList";
import CreatePost from "../createpost/createPost";
import YourPost from "../yourpost/yourPost";
import RaisedButton from 'material-ui/RaisedButton';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import CRSAction from "../../store/actions/CRSAction";
import { connect } from "react-redux";
import AppliedPostStudent from '../allappliedpostStudent/appliedPostStudent';
import AppliedPostCompany from '../allappliedpostCompny/appliedPostCompany';
const style = {
  margin: 12,
};
class App extends Component {
  constructor(){
    super();

  }

  componentDidMount(){
    this.props.getUsers();
    this.props.getPost();
    this.props.getApplyToJob();
  }
  
  render() {
    return (
      <div>
        <Router>
          <div>
           <Navbar/>
           <Link to='/allpost'><RaisedButton primary={true} label="AllPost" style={style}/> </Link>
           <Link to='/yourpost'> <RaisedButton primary={true} label="Your post" style={style}/></Link>
           <Link to='/allstudent'><RaisedButton primary={true} label="All student" style={style}/> </Link>
           <Link to='/allcompany'> <RaisedButton primary={true} label="all company" style={style}/></Link>
           <Link to='/createpost'><RaisedButton primary={true} label="Create post" style={style}/> </Link>
           <Link to='/appliedpoststudent'><RaisedButton primary={true} label="Applied Post student" style={style}/> </Link>
           <Link to='/appliedpostcompany'> <RaisedButton primary={true} label="Applied Post Company " style={style}/></Link>
           <Link to='/profile'> <RaisedButton primary={true} label="Profile " style={style}/></Link>
            {/* <Link to='/yourpost'>YourPost </Link>
            <Link to='/allstudent'>allstudent </Link>
            <Link to='/allcompany'>allcompany </Link> */}
        {/* {this.props.role == 'company' ?  */}
            {/* <Link to='/createpost'>createPost </Link> */}
          {/* // : null} */}
          {/* {this.props.role == 'student' ?  */}
            {/* <Link to='/appliedpoststudent'>Applied Post student</Link> */}
          {/* // : null} */}
          {/* {this.props.role == 'student' ?  */}
          {/* <Link to='/appliedpostcompany'>Applied Post Company </Link> */}
          {/* // : null} */}

            {/* <Link to='/profile'>profile </Link> */}
            <Route path='/profile' component={Profile}/>
            <Route path='/allpost' component={AllPost} />
            <Route path='/yourpost' component={YourPost} />
            <Route path='/allstudent' component={StudentList} />
            <Route path='/allcompany' component={CompanyList} />
            <Route path='/createpost' component={CreatePost} />
            <Route path='/appliedpoststudent' component={AppliedPostStudent} />
            <Route path='/appliedpostcompany' component={AppliedPostCompany} />
          </div>
        </Router>
      </div>
    );
  }
}
let mapStateToProps = (state)=>{
  return {
        role : state.CRSReducer.role,

  }
}
let mapDispatchToProps = (dispatch)=>{
  return {    
      getUsers : ()=>{ dispatch(CRSAction.getUsers())},
      getPost : ()=>{ dispatch(CRSAction.getPost())},
      getApplyToJob  : ()=>{ dispatch(CRSAction.getApplyToJob())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
//export default App;
