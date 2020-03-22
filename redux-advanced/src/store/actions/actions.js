export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// Action creator is just a function that returns an action or creates an action.

// export const increment = () => {
//     return {
//         type: INCREMENT
//     };
// };
// export const decrement = () => {
//     return {
//         type: DECREMENT
//     };
// };
// export const add = (value) => {
//     return {
//         type: ADD,
//         value: value
//     };
// };
// export const subtract = (value) => {
//     return {
//         type: SUBTRACT,
//         value: value
//     };
// };

export const storeResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
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
    }
}