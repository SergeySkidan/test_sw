import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './Reducers/reducer';

//Чтобы связать приложение React или React Native с Redux, вы делаете это с помощью react-redux модуля.
// Это делается с использованием высокоупорядоченного компонента Provider.
// Он в основном передает хранилище до остальной части приложения.

const store = createStore(reducer);


ReactDOM.render(
    <Provider store ={store}>
    <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
