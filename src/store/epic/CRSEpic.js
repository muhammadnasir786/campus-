import {
    Observable
} from 'rxjs'
import CRSAction from "../actions/CRSAction";
import * as firebase from 'firebase';
import config from './config';
// import * as admin from 'firebase-admin';

const postRef = firebase.database().ref('posts');
const userRef = firebase.database().ref('users');
const ref = firebase.database().ref('/');

// var admin = require('firebase-admin');

// var serviceAccount = require('./hakatoon.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
// });
// admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: 'hakatoon-f735b',
//       clientEmail: 'firebase-adminsdk-gm5lu@hakatoon-f735b.iam.gserviceaccount.com',
//       privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDxkeg+6gI4/3en\nrBBYHxBMf5mpicxQ1m22UGcTWe9Wrd7ggyPImevsXAKuvCUnj9lXBvaeNdb7LL/r\nP8h+X1BkcYRRi+N5OipfLLI6faqLgnE2iIYnsnVR8+zgumvtPLaPGtZudM12tsW1\n/DtKiSxUWj1SRCHu0xtZq1pBRa/7FEaNPYuMn71GsLiI5zk5rJMuzE+eqP+L2dTQ\n3WdjamFEvPCzfi6oY8MSsU+t6owT8NH+I3mCjZ/yHLTmbEJHkWDjNgD7TeWdNAt8\nMbgYuaVo1GrbUheO5ErSOTGQptvaBh0bueNuO4fBRTZuDxtm6w/SqpD+9PZTGszA\nOcysgA3PAgMBAAECggEABdxaXBxlTWi1SHYeN2UZiiGWYsybDmMFamTs+0U1T08M\nlznXRmillqhs0Dx0Uk9lIH1kwlXgD1v4lAaKILbDRoySfz/7ltdYa9KzyEOAPb4+\nbOpHBvOHcSOP3avoLmtIqpQmG6vtyDGK/m1OKvLFBo7h6fsJL7gjc7t6hxbfvCGn\nu3WF21hv8trhJG1C8cI+BbuYC5b44pqT256LniFjOBQKfF9qBTlU8TeBA+jNAeWB\nz9tDkaybn71ZAOmbJ0oe+dNJIjnUz1QBnRHjGneFKiXrU8sMUc6YDFV50RQZts/X\nwMG2/9AFPHfPUZnWNe3ItgODGY6JSSO2eAgnAYtS0QKBgQD496qvZH1hmjYusFM6\nNNlHWCZUoPyoE7VO/La7bWxxl9+7d68fIRlzJFvOZ5Dj0pVJqUiAlDY9zXy/8NsY\nnE2Ivtw37EwUnv4NSDrpGOUncYcuWNr2rtvwsdkVLhMcb4pfze0rkrgUfdYOcF6C\nniKTMfS3btLAcY165lgaQh0q7QKBgQD4ZL9oahl0lSkR2NXJuPYb3NQQYAuUuE9G\nrruQeySutvczPCWeZjovUcOYjd3bV9DKxL4VcGfrQ7QfvroMOL7PdM/PQWhfIsn3\nlucAiENS3qd7/g7HN8uD1rYQYZ/bSL5OHPCAObLwcpoEqho/TXQEOkZBFDemUM7A\nV7BDDE44KwKBgHK0GG1qTOHU3LWyAwZEJv7Zu/8tlHoTamsTv1Sm21mScT+7qnEb\nHNCRpcJ4sKZl9OXVGlQy9LKQo7MC0s6J5Kbl2CvjsEGn5sBT0OBn2dvMUE2oHmmc\nsjQ4nB1H9wIY2ZW+GFEE7c5zE1Xfq4teM+vBDlAcvPhw2JAQ4/JlF28ZAoGBAIqA\nqtYO6zi9f1QLQ1Iix2BL5xdmZq67gsDX55Atigu9y+MOs686M1F1Vwo2eLG4qpyV\nzaPotJlTfBmDYPw1m/fTm5hmUUtS+6kJxK7gTCHmMx+JTzY4X0uZKpXBycAdNLgb\nnOLyyVsXm9fj/ZS0nG9LCyd4nXsobdCEVK1eLDNXAoGBANe3VFF+FIGaoq0B0fxi\nvoA+EwMEzxJtcaTTcZ64waLbxbo0dMJhowi2bcomU+4iwBexfaPepJoZ6unqrzf3\ntIAGQu6EplzUxZDQB4/awY8v24x1cLcF0lswD0Zd198tYNXrtyCdKWhqigxd0ABU\n1oHQpasMR1ipPSlZcqOVJZC+\n-----END PRIVATE KEY-----\n'
//     }),
//     databaseURL: 'https://hakatoon-f735b.firebaseio.com'
//   });

// admin.auth().getUser('QNfjlozocXV5sZwcO6WBUTysK2A2')
//   .then((userRecord)=> {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully fetched user data:", userRecord.toJSON());
//   })
//   .catch((error) =>{
//     console.log("Error fetching user data:", error);
//   });

export default class CRSEpic {



    static applyToJob = (action$) => {
        return action$.ofType(CRSAction.APPLY_TO_JOB)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    userRef.child(`/${firebase.auth().currentUser.uid}/appliedPost`).push(payload).then(() => {
                        // alert('Post Created Successfully') payload = PostKey
                        postRef.child(`${payload}/appliedstudent/`).push(firebase.auth().currentUser.uid).then(() => {

                        });
                    }).catch((re) => { console.log(re.message) })
                )
                    .map((x) => {
                        return {
                            type: CRSAction.NULL
                        }
                    })
            })
    }
    static getUsers = (action$) => {
        return action$.ofType(CRSAction.GET_USERS)
            .switchMap(({
                payload
            }) => {
                return new Observable((observer) => {
                    userRef.on('child_added', (s) => {
                        observer.next({
                            type: CRSAction.GET_USER_ADD,
                            payload: {
                                key: s.key,
                                userData: s.val()
                            }
                        })
                    })
                    userRef.on('child_changed', (s) => {
                        console.log(s.val(), s.key)
                        // alert('nasir')
                        observer.next({
                            type: CRSAction.GET_USER_PROFILE,
                            payload: {
                                key: s.key,
                                userData: s.val()
                            }
                        })
                    })

                }).takeUntil(action$.ofType('LOGOUT'));
            })
    }
    static updateProfile = (action$) => {
        return action$.ofType(CRSAction.UPDATE_PROFILE)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    userRef.child(`${firebase.auth().currentUser.uid}`).set(payload).then(() => {
                        alert('Profile Updated Successfully')
                    })
                )
                    .map((x) => {
                        return {
                            type: CRSAction.NULL
                        }
                    })
            })
    }
    static addPost = (action$) => {
        return action$.ofType(CRSAction.ADD_POST)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    postRef.push(payload).then(() => {
                        alert('Post Created Successfully')
                    })
                )
                    .map((x) => {
                        return {
                            type: CRSAction.NULL
                        }
                    })
            })
    }
    static deletePost = (action$) => {
        return action$.ofType(CRSAction.DELETE_POST)
            .switchMap(({
                payload
            }) => {
                // console.log('Nasir')
                return Observable.fromPromise(
                    postRef.child(`/${payload}/`).set(null)
                )
                    .map((x) => {
                        return {
                            type: CRSAction.NULL
                        }
                    })
            })
    }
    static updatePost = (action$) => {
        // alert('asnias')
        return action$.ofType(CRSAction.UPDATE_POST)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    postRef.child(`${payload.key}`).set(payload.postData)
                )
                    .map((x) => {
                        return {
                            type: CRSAction.NULL
                        }
                    })
            })
    }
    static getPost = (action$) => {
        return action$.ofType(CRSAction.GET_POST)
            .switchMap(({
                payload
            }) => {
                return new Observable((observer) => {
                    postRef.on('child_added', (s) => {
                        observer.next({
                            type: CRSAction.GET_POST_ADD,
                            payload: {
                                key: s.key,
                                postData: s.val()
                            }
                        })
                    })
                    postRef.on('child_removed', (s) => {
                        console.log(s.val(), s.key)
                        observer.next({
                            type: CRSAction.GET_POST_DELETE,
                            payload: s.key
                        })
                    })
                    postRef.on('child_changed', (s) => {
                        console.log(s.val(), s.key)
                        // alert('child_changed')
                        observer.next({
                            type: CRSAction.GET_POST_UPDATE,
                            payload: {
                                key: s.key,
                                postData: s.val()
                            }
                        })
                    })

                }).takeUntil(action$.ofType('LOGOUT'));
            })
    }
    static getCancelLogout = (action$) =>
        action$.ofType('LOGOUT')
            .switchMap(({ payload }) => {
                ref.off();
                postRef.off();
                return Observable.of({ type: CRSAction.NULL })
                //we dont want to do any work on GET_TODO_CANCELLED so we are dispatching NULL action
            })






}








