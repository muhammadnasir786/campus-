import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { CardHeader } from 'material-ui/Card';
import { connect } from 'react-redux'
import * as firebase from 'firebase'
import AuthAction from '../../store/actions/authAction';
import SideBar from '../../container/sidebar/sideBar'
class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

    render() {
        var provider = new firebase.auth.FacebookAuthProvider();
        return (
            <div>
                <AppBar
                    onLeftIconButtonClick={this.props.isLogin ? this.handleToggle : () => { alert('Login First') }}
                    title="Campus Resuritment System"
                    // iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={<FlatButton onClick={ this.props.isLogin ? ()=>{
                        firebase.auth().signOut().then(()=>{
                            alert('Logout Success Full');
                            this.props.logout();
                        }).catch(()=>{
                            alert('Error')
                        })
                    } : 
                    () => {
                        firebase.auth().signInWithPopup(provider).then( (result) =>{
                            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                            var token = result.credential.accessToken;
                            // The signed-in user info.
                            var user = result.user;
                            console.log(token)
                            console.log(user)
                            // ...
                            let userData  = {
                                name : user.displayName,
                                email : user.email,
                                phoneNumber :user.phoneNumber,
                                photoURL : user.photoURL,
                                address : null,
                                age : 20
                            }

                             firebase.database().ref('/').child(`users/${user.uid}/`).set(userData).then(()=>{
                            
                                 alert('User Login Successfully')
                             }).catch((e)=>{
                                alert(e.message)
                             });
                            this.props.loginSuccess();
                        


                        }).catch( (error) =>{
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // The email of the user's account used.
                            var email = error.email;
                            // The firebase.auth.AuthCredential type that was used.
                            var credential = error.credential;
                            console.log(error.code)
                            console.log(error.message)
                            // ...
                        });
                    }}
                    
                     label={this.props.isLogin ? 'Logout' :  'Login With Facebook'}
                    
                    
                     />}
                />
                <Drawer
                    docked={false}
                    width={340}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <SideBar handleClose={this.handleClose} />
                </Drawer>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isLogin: state.AuthReducer.isLogin,
        user : state.AuthReducer.user
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        loginSuccess :  ()=>{  dispatch(AuthAction.loginUserSuccessfully())      },
        logout : ()=> { dispatch(AuthAction.logout())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
