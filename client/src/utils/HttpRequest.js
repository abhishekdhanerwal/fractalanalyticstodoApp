import Axios from 'axios';
const httpRequest = (url, reqObj) => {    
    return new Promise( (resolve, reject) => {
        Axios.post(url, reqObj)
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        });
    });
};

export default httpRequest;