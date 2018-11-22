//Приемник действия известен как редуктор.
// Когда действие инициируется, изменяется состояние приложения.
// Обработка состояния приложения осуществляется с помощью редукторов.
// Редуктор - это чистая функция, которая вычисляет следующее состояние на основе начального или предыдущего состояния.
// Он всегда производит тот же вывод, если состояние не изменяется.
// Он принимает два входа, а состояние и действие должны возвращать состояние по умолчанию.

// StartTimer - начнет таймер
// applyRestartTimer - остановит функцию таймера и установит все по умолчанию
// applyAddSecond - будет проверять, прошло ли время меньше времени общего таймера.
// Если это так, он добавит еще одну секунду, чтобы увеличить ее.
// Если нет, он вернет состояние по умолчанию и остановит функцию таймера.


import {START_TIMER, RESTART_TIMER, ADD_SECOND} from "../Tipes/types";

const TIME_DURATION = 120;

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