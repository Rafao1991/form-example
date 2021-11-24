import { useState } from 'react';

function useError(validate) {

    const [error, setError] = useState(_createState(validate));

    function validateFields(event) {
        event.stopPropagation();
        const { name, value } = event.target;
        const newState = { ...error };
        newState[name] = validate[name](value);
        setError(newState);
    }

    function validateSubmit() {
        for (let field in error) {
            if (!error[field].valid) {
                return false;
            }
        }
        return true;
    }

    return [error, validateFields, validateSubmit];
}

function _createState(validate) {
    const state = {};
    for (let field in validate) {
        state[field] = { valid: true, message: "" };
    }

    return state
}

export default useError;