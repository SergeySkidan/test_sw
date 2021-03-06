import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionsCreators as actions} from "../../Actions/actions";
// bindActionCreators - сопоставляет функции действия с объектом, используя имена функций действия.
// Эти функции автоматически отправляют действие в хранилище при вызове функции. Чтобы изменить данные,
// нам нужно отправить действие. Чтобы включить это, нам нужны две вещи: mapStateToProps и mapDispatchToProps
// нам нужно связать их с нашим компонентом
// mapStateToProps - это объект, который живет в хранилище, ключи которого передаются компоненту в качестве реквизита.
// чтобы увеличить значение времени, я использую метод жизненного цикла React componentWillReceiveProps.

function formatTime(time) {
    let minutes = Math.floor(time/60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends React.Component{
    componentWillReceiveProps(nextProps){
    const currentProps = this.props;
    if(!currentProps.isPlaying && nextProps.isPlaying){
        //start the interval
        const timerInterval = setInterval(() =>{currentProps.addSecond();}, 1000);
        this.setState({ timerInterval });
    }else if (currentProps.isPlaying && !nextProps.isPlaying){
        //stop the interval
        clearInterval(this.state.timerInterval);
    }
    }

render(){
const {isPlaying, elapsedTime, timerDuration, startTimer, restartTimer} = this.props;

return(
    <div style = {styles}>
        <h3>Timer Component</h3>
        <h3>{formatTime(timerDuration - elapsedTime)}</h3>

        {!isPlaying && (<button style={styles.button} onClick={startTimer}>On</button>)}

        {isPlaying && (<button style={styles.button} onClick={restartTimer}>Of</button>)}

    </div>
        );
    }
}

const styles = {
        flex: 1,
        backgroundColor: '#82ffe0',
        alignItems: 'center',
        justifyContent: 'center',
    button:{
        margin: 5,
        width: 100,
        height: 50,
        backgroundColor: '#fggfff'
    }
};

function mapStateToProps(state) {
    const {isPlaying, elapsedTime, timerDuration} = state;
  return {isPlaying, elapsedTime, timerDuration};
}

function mapDispatchToProps(dispatch) {
    return {
        startTimer:  bindActionCreators(actions.startTimer, dispatch),
        restartTimer: bindActionCreators(actions.restartTimer, dispatch),
        addSecond: bindActionCreators(actions.addSecond, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);