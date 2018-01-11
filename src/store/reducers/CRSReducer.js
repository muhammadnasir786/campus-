import * as firebase from "firebase";
import CRSAction from "../actions/CRSAction";
// import CRSAction from "../actions/CRSAction";
let CRS_STATE = {
    allPost : {},
    role : '',
    allUsers : {},
    getApplyToJob : {}
}


let CRSReducer = (state = CRS_STATE,action)=>{

    switch (action.type) {
        case CRSAction.GET_POST_ADD:
            let allPost = Object.assign({},state.allPost);
            allPost[action.payload.key] = action.payload.postData;
            return { ...state , allPost};

        case CRSAction.GET_POST_DELETE:
            let allPostz = Object.assign({},state.allPost);
            delete allPostz[action.payload];
            return { ...state ,allPost :  allPostz };

        case CRSAction.GET_POST_UPDATE:
            let allPostzz = Object.assign({},state.allPost);
            allPostzz[action.payload.key] = action.payload.postData;
            return { ...state , allPost :  allPostzz }; 
        case CRSAction.GET_USER_PROFILE :
        let allUserss  =Object.assign({}, state.allUsers);
        allUserss[action.payload.key] = action.payload.userData
        return { ...state , allUsers : allUserss }

        case CRSAction.GET_USER_ADD : 
            let allUsers = Object.assign({} , state.allUsers);
            let role = (state.role);
            (action.payload.key === firebase.auth().currentUser.uid) ? role = action.payload.userData.role : null//  action.payload.postData.role : ''
            allUsers[action.payload.key] = action.payload.userData;
            return { ...state , allUsers  ,role}

        case CRSAction.GET_APPLY_TO_JOB_ADD : 
            let getApplyToJob = Object.assign({},state.getApplyToJob);
            getApplyToJob[action.payload.key] = action.payload.data;
            return { ...state , getApplyToJob};
        case 'LOGOUT' : 
            return { 
                allPost : {},
                role : '',
                allUsers : {}
             }
        default:
            return state;
        }
    }
    
    export default CRSReducer;
    