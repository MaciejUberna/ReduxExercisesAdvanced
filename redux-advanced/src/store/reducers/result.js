import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
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
            return updateObject(state, {results: state.results.filter((result) => result.id !== action.resultElementId)});
        default:
            return state;
    };

};

export default reducer;