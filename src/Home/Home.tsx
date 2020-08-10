import React from "react"
import {BrowserRouterProps, useLocation, Redirect, useHistory} from "react-router-dom";
import {ProcessesTable} from "../ProcessesTable/ProcessesTable";

interface Props extends BrowserRouterProps {
    token: string | null;
}

export const Home = ({token}: Props) => {
    let history = useHistory();
    const handleLogout = React.useCallback(() => {
        localStorage.removeItem('token');
        history.push('/login');
    }, [history]);


    if (!token) {
        return <Redirect to={'/login'}/>
    }

    return <div>
        <button className={'app-btn'} onClick={handleLogout}>Log out</button>
        <h3>Home</h3>

        <ProcessesTable />
    </div>
}