import {CHANGE_INPUT, KEYUP_ENTER} from './todoList/input/actionType';
import {FINISH_ITEM} from './todoList/wait/actionType';

const defaultState = {
    inputValue: "",
    waitList: [],
    doneList: []
}

export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT) {
        const newState = Object.assign({}, state);
        newState.inputValue = action.value;
        return newState;
    }
    
    if(action.type === KEYUP_ENTER) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.waitList.unshift({id: Date.parse(new Date()), value: action.value});
        newState.inputValue = "";
        return newState;
    }

    if(action.type === FINISH_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.doneList.unshift(action.value);
        newState.waitList.splice(action.iNow, 1);
        return newState;
    }

    return state;
}
