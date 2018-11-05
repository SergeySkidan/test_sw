import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import small_ball from '../images/small_ball.png'


export  default class ImageCarousel extends React.Component {
    render() {
               return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="carousel"
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={5000}>

                    <img src={small_ball} key={small_ball}/>
                </ReactCSSTransitionGroup>


            </div>
        );
    }
}