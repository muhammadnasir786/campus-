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
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import CRSAction from "../../store/actions/CRSAction";
import { connect } from "react-redux";
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
            <Link className='btn' to='/allpost'>AllPost </Link>
            <Link to='/yourpost'>YourPost </Link>
            <Link to='/allstudent'>allstudent </Link>
            <Link to='/allcompany'>allcompany </Link>
            <Link to='/createpost'>createPost </Link>
            <Link to='/profile'>profile </Link>
            <Route path='/profile' component={Profile}/>
            <Route path='/allpost' component={AllPost} />
            <Route path='/yourpost' component={YourPost} />
            <Route path='/allstudent' component={StudentList} />
            <Route path='/allcompany' component={CompanyList} />
            <Route path='/createpost' component={CreatePost} />
          </div>
        </Router>
      </div>
    );
  }
}
let mapStateToProps = (state)=>{
  return {

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
