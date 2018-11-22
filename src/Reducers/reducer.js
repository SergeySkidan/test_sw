import {START_TIMER, RESTART_TIMER, ADD_SECOND} from "../Tipes/types";

const TIME_DURATION = 10;

//initial state
const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
};

//helper function
function applyStartTime(state) {
    return {
        ...state,
        isPlaying: true
    };
}

function applyRestartTimer(state) {
    return{
        ...state,
        isPlaying: false,
        elapsedTime: 0,
        timerDuration: TIME_DURATION
};
}

function applyAddSecond(state) {
    if(state.elapsedTime < TIME_DURATION){
        return{
            ...state,
            elapsedTime: state.elapsedTime + 1
    };
    }else {
    return{
        ...state,
        isPlaying: false
    };
}
}

//reducer function
function reducer(state = initialState, action) {
    switch (action.type) {
        case START_TIMER:
            //hendle the action here using helper function
            return applyStartTime(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

export default reducer;