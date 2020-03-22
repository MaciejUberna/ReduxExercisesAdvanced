import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionCreators from '../../Store/actions/actions';

const toPascal = (str) => {
    return str.replace(/\w+/g,(w)=>w[0].toUpperCase()+w.slice(1).toLowerCase());
}

const controls = {
    inc: {
        label: toPascal(actionCreators.INCREMENT),
        action: actionCreators.INCREMENT,
    },
    dec: {
        label: toPascal(actionCreators.DECREMENT),
        action: actionCreators.DECREMENT,
    },
    add: {
        label: toPascal(actionCreators.ADD)+' 15',
        action: actionCreators.ADD,
        value: 15,
    },
    sub: {
        label: toPascal(actionCreators.SUBTRACT)+' 5',
        action: actionCreators.SUBTRACT,
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
    onModifyCounter: (type, value) => dispatch(actionCreators.modifyCounter(type,value)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (elementId) => dispatch(actionCreators.deleteResult(elementId))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);