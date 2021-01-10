import * as type from './ActionTypes';
import httpRequest from '../utils/HttpRequest';
// import {channels} from '../utils/Channels';
// import {emptyLocalStorage} from '../utils/EmptyLocalStorage';

const reqStart = () => {
   return { 
       type:type.REQ_START
    };
};

const reqSuccess = (response) => {
    return {
        type:type.REQ_SUCCESS,
        response: response
    };
};

const reqListSuccess = (response) => {
    return {
        type:type.REQ_LIST_SUCCESS,
        response: response
    };
};

const saveSuccess = (req, response) => {
    return {
        type: (req.formType === "bucket") ? type.SAVE_BUCKET_SUCCESS : type.SAVE_LIST_SUCCESS,
        response: response
    };
};

const reqFail = (error) => {
    return {
        type:type.REQ_FAIL,
        error:error
    };
};

export const getBucketList = () => {
    return dispatch => {
        dispatch(reqStart());
        httpRequest('/buckets/getAll', {}).then((res) => {
            dispatch(reqSuccess(res.data));
        }).catch(err => {
            dispatch(reqFail(err));
        });
    }
};

export const getTodoList = () => {
    return dispatch => {
        dispatch(reqStart());
        httpRequest('/list/getAll', {}).then((res) => {
            dispatch(reqListSuccess({allLists : res.data}));
        }).catch(err => {
            dispatch(reqFail(err));
        });
    }
};

export const changeList = (type, list) => {
    return dispatch => {
        dispatch(reqStart());
        httpRequest('/list/change', {type, list}).then((res) => {
            dispatch(reqListSuccess({...res.data}));
        }).catch(err => {
            dispatch(reqFail(err));
        });
    }
};

export const saveForm = (req) => {
    return dispatch => {
        dispatch(reqStart());
        let url = '';
        if(req.formType === "bucket")
            url = '/buckets/save';
        else
            url = '/list/save';

        httpRequest(url, req).then((res) => {
            dispatch(saveSuccess(req, res.data));
        }).catch(err => {
            dispatch(reqFail(err));
        });
    }
};