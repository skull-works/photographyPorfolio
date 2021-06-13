import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Page
import Home from '../pages/home/home';
import Bio from '../pages/bio/bio';
import Contact from '../pages/contact/contact';
import Exhibit from '../pages/exhibit/exhibit';

// import Works from '../pages/works/works';
import Ongoing from '../pages/UnderDevelopmentPage/ongoing';
import Artist from '../pages/artist/artist';

import './styles.css';

// Not in use
// import Hide from '../pages/hide-content/hide'; // HIDE CONTENT VERSION

const Routes = () => {
    return(
        <Router>
            <Switch>
                {/* UNHIDE CONTENT VERSION */}
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/bio'>
                    <Bio />
                </Route>
                <Route exact path='/works'>
                    {/* <Works /> */}
                    <Ongoing />
                </Route>
                <Route path='/exhibit'>
                    <Exhibit />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                
                <Route path='/artist/:id' component={Artist} />
                <Route path='/artist' component={Artist} />
                
            </Switch>
        </Router>
       
    )
}

export default Routes;