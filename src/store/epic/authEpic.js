

import { Observable } from 'rxjs'
import  AuthAction from "../actions/authAction";
import * as firebase from 'firebase';
  // Initialize Firebase
import  config from './config';

// firebase.initializeApp(config)

const ref = firebase.database().ref('/');
const auth = firebase.auth();
// let userData ;

class AuthEpic {

        static createUser = (action$)=>{
            let userCreated = false;
            return action$.ofType(AuthAction.CREATE_USER)
            .switchMap(({payload })=>{
                return Observable.fromPromise(
                    auth.createUserWithEmailAndPassword(payload.email,payload.password)
                    .then((res)=>{
                        ref.child(`users/${res.uid}`).set(payload);
                        userCreated = true;
                        // Action Dispatch for reducer to state change , and component render for 
                        // login OK use flages and dispatch at the bottom .map((x)=>{})
                        alert('User Successfully Created')
                    }).catch((err)=>{
                        // alert(err)
                        alert(err.message)
                        
                    })
                )
                .map((x)=>{
                    return userCreated ? AuthAction.createUserSuccessfully() : { type : null}
                })
            })
        }

        static loginUser = (action$)=>{
            let authenticate = false;
            return action$.ofType(AuthAction.LOGIN_USER)
            .switchMap(({payload })=>{
                return Observable.fromPromise(
                    auth.signInWithEmailAndPassword(payload.email,payload.password)
                    .then((res)=>{
                        authenticate = true;
                        console.log('login');
                        localStorage.setItem('uid',res.uid)
                        // console.log(res.uid)
                        // send  userdata at the end for reducer
                        // ref.child(`users/${res.uid}/`).once('value',(s)=>{
                        //     console.log(s.val())
                        //     userData = s.val();
                        //     console.log(userData)
                        // });
                        console.log('Nasir')
                        return { type : AuthAction.LOGIN_USER_SUCCESSFULLY }
                    }).catch((err)=>{
                        return  {type : null}
                        console.log('not');
                        alert(err.message)
                    })
                )
                // .map((x)=>{
                //     // return { type : null }
                //     return   authenticate ? AuthAction.loginUserSuccessfully() : {type : null}
                // })
            })
        }
}

export default AuthEpic;