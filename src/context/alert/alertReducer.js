import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
    [HIDE_ALERT]: () => null,
    [SHOW_ALERT]: (state, action) => action.payload,
    DEFAULT: state => state
}

console.log('handlers', handlers)


export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    console.log('state', state)
    console.log('action', action)
    return handler(state, action);
}