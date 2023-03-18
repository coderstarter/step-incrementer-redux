import React from 'react';
import { connect } from 'react-redux';
import { addStep, resetSteps } from './actions';

function StepCounter({ count, addStep, resetSteps }) {
    return (
        <div>
            <h1>Step Count: {count}</h1>
            <button onClick={addStep}>Add Step</button>
            <button onClick={resetSteps}>Reset Steps</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};

const mapDispatchToProps = {
    addStep,
    resetSteps,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter);
