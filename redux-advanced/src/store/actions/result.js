import * as actionTypes from './actionTypes';

// Action creator is just a function that returns an action or creates an action.

//Extra action to handle async call
export const saveResult = (res) => {
    const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: updatedResult
    }; 
};

export const storeResult = (result) => {
    //getState enables to get to the state prior to dispatched action.
    //But try not to overuse getState. Instead pass valid state data as an argument
    //Of action creator.
    return  (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter
            console.log('[PrevState of storeResult action creator is: ',oldCounter)
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