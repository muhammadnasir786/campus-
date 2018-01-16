import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

//requiring all reducers
import AuthReducer from './reducers/authReducer';
import CRSReducer from "./reducers/CRSReducer";
//requiring all epics
import AuthEpic from './epic/authEpic';
import CRSEpic from './epic/CRSEpic';

//combine epic
const rootEpic = combineEpics(
    AuthEpic.createUser,
    AuthEpic.loginUser,
    CRSEpic.addPost,
    CRSEpic.getPost,
    CRSEpic.deletePost,
    CRSEpic.updatePost,
    CRSEpic.getCancelLogout,
    CRSEpic.getUsers,
    CRSEpic.updateProfile,
    CRSEpic.applyToJob,
    
    

);
//combine reducers
const rootReducer = combineReducers({
    AuthReducer,CRSReducer
})

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//appling middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//creating store
export let store = createStoreWithMiddleware(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
});
