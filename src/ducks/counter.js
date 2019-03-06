
const initialState = { 
    currentValue: 0,
    previousValues: [],
    futureValues: [],
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function reducer( state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                currentValue: state.currentValue + 1,
            };
        case DECREMENT:
            return {
                ...state,
                currentValue: state.currentValue -1,
            };
    }

    return state;

}
// ^ thats the reducer

export {
    reducer,
    INCREMENT,
    DECREMENT,

};