import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../Store/actions';

const toPascal = (str) => {
    return str.replace(/\w+/g,(w)=>w[0].toUpperCase()+w.slice(1).toLowerCase());
}

const controls = {
    inc: {
        label: toPascal(actionTypes.INCREMENT),
        action: actionTypes.INCREMENT,
    },
    dec: {
        label: toPascal(actionTypes.DECREMENT),
        action: actionTypes.DECREMENT,
    },
    add: {
        label: toPascal(actionTypes.ADD)+' 15',
        action: actionTypes.ADD,
        value: 15,
    },
    sub: {
        label: toPascal(actionTypes.SUBTRACT)+' 5',
        action: actionTypes.SUBTRACT,
        value: 5,
    }
}
 
const Counter = props => (
    <div>
        <CounterOutput value={props.ctr} />
        {Object.keys(controls).map(key => (
            <CounterControl
                key={key}
                label={controls[key].label}
                clicked={props.onModifyCounter.bind(this,controls[key].action, controls[key].value)} />
        ))}
        <hr />
        <button onClick={props.onStoreResult.bind(this,props.ctr)}>Store result</button>
        <ul>
            {props.storedResults.map(result => (
                <li onClick={props.onDeleteResult.bind(this,result.id)} key={result.id}>{result.value}</li>
            ))}
        </ul>
    </div>
);
 
const mapStateToProps = state => ({ 
    ctr: state.ctr.counter,
    storedResults: state.res.results
});
 
const mapDispatchToProps = dispatch => ({
    onModifyCounter: (type, value) => dispatch({ type, value }),
    onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
    onDeleteResult: (elementId) => dispatch({type: actionTypes.DELETE_RESULT,resultElementId: elementId})
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);