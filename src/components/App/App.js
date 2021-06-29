import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';

import UserContext from '../../contexts/UserContext';
import GlobalStyle from '../GlobalStyle';

export default function App(){
    const [user, setUser] = useState();

    return( 
            <UserContext.Provider value={{user, setUser}}>
                <GlobalStyle/>
                <BrowserRouter> 
                    <Switch>
                        <Route path="/sign-in" component={SignIn} exact/>
                        <Route path="/sign-up" component={SignUp} exact/>               
                        <Route path="/" component={Home} exact/>
                        <Route path="/cart" component={Cart} exact/>
                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
    );
}