import * as actionTypes from './actionTypes';

// Action creator is just a function that returns an action or creates an action.

//Extra action to handle async call
export const saveResult = (res) => {
    // const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }; 
};

export const storeResult = (result) => {
    return  dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result));
        },5000);
    };
};

export const deleteResult = (resultElementId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementId: resultElementId
    };
};