let immutable = require('immutable');
let List = immutable.List;

export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}