export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// Action creator is just a function that returns an action or creates an action.

//Extra action to handle async call
export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
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
        type: DELETE_RESULT,
        resultElementId: resultElementId
    };
};

export const modifyCounter = (type,value) => {
    return {
        type: type,
        value: value
    };
};