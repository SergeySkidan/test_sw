//types - Тип любого действия является строковым значением и определяется как константа.
// В файле actions.js нам потребуются эти типы для определения создателей действий.
// Action Creators - это функции, которые создают действия.



import {START_TIMER, RESTART_TIMER, ADD_SECOND} from "../Tipes/types";

function startTimer() {
    return{
      type: START_TIMER
    };
}

function restartTimer() {
    return{
        type: RESTART_TIMER
    };
}

function addSecond() {
    return{
        type: ADD_SECOND
    };
}

const actionsCreators = {
    startTimer,
    restartTimer,
    addSecond
};

export {actionsCreators};