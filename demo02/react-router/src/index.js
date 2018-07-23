import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
    BrowserRouter, 
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import reducers from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';
// import { counter } from './index.redux';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

console.log(store.getState());

// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         console.log(this.props);
//         // this.props.history.push('/');
//         return <h2>测试组件 {this.props.match.params.location}</h2>
//     }
// }

/**
 * 登录：没有登录信息，统一调整login
 * 页面  导航+显示+注销
 *  一营
 *  二营
 *  骑兵连
 * Router+Redux
 */
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/* 只渲染命中的第一个Route */}
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)
 