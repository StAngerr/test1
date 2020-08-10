import React from "react"
import {BrowserRouterProps, useHistory} from "react-router-dom";

interface Props extends BrowserRouterProps {

}

export const Login = ({ forceRefresh }: Props) => {
    let history = useHistory();
    const handleLogin = React.useCallback(() => {
        localStorage.setItem('token', 'value');
        history.push('/')
    }, []);

    return <div className={'login-form'}>
        <h2 className={'login-caption '}>Login form</h2>
        <input autoComplete={'off'} className={'login-username'} type="text"/>
        <input autoComplete={'off'} className={'login-password'} type="password"/>
        <label className={'login-rm'}>
            <span>Remember me</span>
            <input type="checkbox"/>
        </label>

        <button className={'app-btn login-btn'} onClick={handleLogin}>Sign in</button>
        <a className={'register-btn app-btn'}>Register</a>
    </div>
}