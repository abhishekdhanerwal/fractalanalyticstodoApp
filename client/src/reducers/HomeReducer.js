import * as type from '../actions/ActionTypes';
import { UpdateObject } from '../utils/UpdateObject';

const initialState = {
    error:null,
    loading: false,
    bucketList: null,
    todoList: null
};

const reqStart = (state, action) => {
    return UpdateObject(state, {error:null, loading:true});
};

const reqSuccess = (state, action) => {
    return UpdateObject(state, {
        bucketList:action.response,
        error:null, 
        loading:false
    });
};

const reqError = (state, action) => {
    return UpdateObject(state, {
        error:action.error, 
        loading:false
    });
};

const saveBucketSuccess = (state, action) => {
    return UpdateObject(state, {
        bucketList:action.response.allBuckets,
        error:null, 
        loading:false
    });
};

const saveListSuccess = (state, action) => {
    return UpdateObject(state, {
        todoList:action.response.allLists,
        error:null, 
        loading:false
    });
};

const AuthReducer = (state=initialState, action) => {
    switch(action.type) {
        case type.REQ_START: return reqStart(state, action);
        case type.REQ_SUCCESS: return reqSuccess(state, action);
        case type.REQ_FAIL: return reqError(state, action);
        case type.SAVE_BUCKET_SUCCESS: return saveBucketSuccess(state, action);
        case type.SAVE_LIST_SUCCESS:
        case type.REQ_LIST_SUCCESS: return saveListSuccess(state, action);
        default:
            return state;
    }
};

export default AuthReducer;