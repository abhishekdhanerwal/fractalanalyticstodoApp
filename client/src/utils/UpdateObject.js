export const UpdateObject = (oldObject, updatedProperties) => {
    const newObj = Object.assign({},oldObject,updatedProperties);
    return newObj;
};