import React from 'react';
import './App.css';
import {Login} from "./Login/Login";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Home} from "./Home/Home";
function App() {


    const token = React.useMemo(() => localStorage.getItem('token'), []);
  return (
    <div className="App">
        <BrowserRouter >
            <Switch>
                <Route path={'/login'} > <Login /></Route>
                <Route path={'/'} ><Home token={token} /> </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
