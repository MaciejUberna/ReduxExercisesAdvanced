import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updateArray = state.results.filter((result) => result.id !== action.resultElementId);
    return updateObject(state, { results: updateArray });
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.STORE_RESULT:
            //Object.assign({},{new: obj})
            return updateObject(state,{results: [{id: new Date(), value: action.result}].concat(state.results)});
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArrayOfResults = [...state.results];
            // newArrayOfResults.splice(id,1)
            return deleteResult(state, action);
        default:
            return state;
    };

};

export default reducer;