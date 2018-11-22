import React from 'react';
import {render} from 'react-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './ReactAnimations.css';
import small_ball from "../../images/small_ball.png";


const style = {
    background: '#90ff45',
    width: '100px',
    height: '100px',
    margin: '50px auto',
    color: 'white'
}

export default class ReactAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            data: [],
            name:''
        };
    }
    add(){
        var arr = this.state.data.slice();
        arr.push({'id':(new Date()).getTime(),'name':this.state.name})
        this.setState({data:arr})
    }
    handleChange(e){
        this.setState({name:e.target.value})
    }


    //animate не поддерживается Edge и explorer
    run1() {
        this.elem.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.3)' },
            { transform: 'scale(1)' }
        ], {
            duration: 400,
            iterations: 3
        })
    }

    run2() {
        this.el.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.3)' },
            { transform: 'scale(1)' }
        ], {
            duration: 400,
            iterations: 3
        })
    }


    render() {
        return (
            <div>
                Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />
                <ul>
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false} transitionEnterTimeout={3000} transitionEnter={true} transitionLeave={false}>
                        {
                            this.state.data.map(function(player) {
                                return <li key={player.id}>{player.name}</li>
                            })
                        }
                    </ReactCSSTransitionGroup>
                </ul>



<img src={small_ball} id = 'small_ball' className="small_ball" alt="small_ball" onClick={this.run1.bind(this)} ref={e => this.elem = e}/>

<div onClick={this.run2.bind(this)} ref={e => this.el = e} style={style}>Click me!</div>


            </div>
        )
    }
}


