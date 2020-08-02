import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../layout/navbar/navbar';
import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';


const Routes = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
            </Switch>
        </Router>
       
    )
}

export default Routes;