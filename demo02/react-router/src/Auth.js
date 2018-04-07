import React from 'react';
import {connect} from 'react-redux';
import {login} from './Auth.redux';
import {Redirect} from 'react-router-dom';
/**
 * 两个 reducers ,每个 reducers 都有一个 state
 * 合并 reducers
 */
@connect(
    state => state.auth,
    {login}
)
class Auth extends React.Component {
    render() {
        return (
            <div>
                { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null} 
                <h2>你没有权限，需要登录才能查看</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Auth;