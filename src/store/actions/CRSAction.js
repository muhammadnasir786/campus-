


export default class CRSAction {
    // ------------------------- For Epic --------------------------------------------

    static GET_POST  = 'GET_POST'; 
    static ADD_POST  = 'ADD_POST';      // createa post
    static DELETE_POST = 'DELETE_POST';
    static UPDATE_POST = 'UPDATE_POST';

    static GET_USERS = 'GET_USERS';

        // ------------------------- For Reducer --------------------------------------------

    static GET_POST_ADD = 'GET_POST_ADD';
    static GET_POST_DELETE = 'GET_POST_DELETE';
    static GET_POST_UPDATE = 'GET_POST_UPDATE';

    static UPDATE_PROFILE = 'UPDATE_PROFILE'
    static GET_USER_ADD = 'GET_USER_ADD';
    static GET_USER_PROFILE = 'GET_USER_PROFILE'
    static SUSPEND_USER = 'SUSPEND_USER'

    static APPLY = 'APPLY';
    static GET_APPLY_HIDE = 'GET_APPLY_HIDE'

    static APPLY_TO_JOB = 'APPLY_TO_JOB';
    static GET_APPLY_TO_JOB_ADD = 'GET_APPLY_TO_JOB_ADD';
    static  GET_APPLY_TO_JOB = 'GET_APPLY_TO_JOB'
        // ------------------------- For Epic --------------------------------------------
    static NULL = null
    
    static getApplyToJob = ()=>{
        return{
            type : CRSAction.GET_APPLY_TO_JOB
        }
    }
    static applyToJob = (data)=>{
        return {
            type : CRSAction.APPLY_TO_JOB,
            payload : data
        }
    }


    static updateProfile = (data)=>{
        return {
            type : CRSAction.UPDATE_PROFILE,
            payload : data
        }
    }
    static getPost = ()=>{
        return {
            type : CRSAction.GET_POST,
            
        }
    }
    static addPost = (data)=>{
        return {
            type : CRSAction.ADD_POST,
            payload : data
        }
    }
    static deletePost = (data)=>{
        return {
            type : CRSAction.DELETE_POST,
            payload : data
        }
    }
    static updatePost = (data)=>{
        return {
            type : CRSAction.UPDATE_POST,
            payload : data
        }
    }
    static getUsers = ()=>{
        return {
            type : CRSAction.GET_USERS,
        }
    }

    // ------------------------- For Reducer --------------------------------------------
    static getApplyHide = (data)=>{
        return {
            type : CRSAction.GET_APPLY_HIDE,
            payload : data
        }
    }


    static getPostAdd = (data)=>{
        return {
            type : CRSAction.GET_POST_ADD,
            payload : data
        }
    }
    static getPostDelete = (data)=>{
        return {
            type : CRSAction.GET_POST_DELETE,
            payload : data
        }
    }
    static getPostUpdate = (data)=>{
        return {
            type : CRSAction.GET_POST_UPDATE,
            payload : data
        }
    }

    static getUsersAdd = (data)=>{
        return {
            type : CRSAction.GET_USERS,
            payload : data
        }
    }

    static getProfileUpdate = (data)=>{
        return {
            type : CRSAction.GET_USER_PROFILE,
            payload : data
        }
    }






}