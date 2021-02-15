import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../layout/navbar/navbar';
import Home from '../pages/home/home';
import Bio from '../pages/bio/bio';
import Contact from '../pages/contact/contact';
import Artist from '../pages/artist/artist';
import Works from '../pages/works/works';
// import Hide from '../pages/hide-content/hide'; // HIDE CONTENT VERSION

const Routes = () => {
    return(
        <Router>
            <Navbar />
            <Switch>

                {/* UNHIDE CONTENT VERSION */}
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/bio'>
                    <Bio />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/artist' component={Artist} />
                <Route path='/artist/:id' component={Artist} />
                <Route path='/VirtualExhibit' component={Works} />


                {/* HIDE CONTENT VERSION */}
                {/* <Route exact path='/'>
                    <Hide />
                </Route> */}
                {/* <Route path='/artist'>
                    <Hide />
                </Route> */}
                {/* <Route path='/VirtualExhibit'>
                    <Hide />
                </Route> */}
                {/* UNHIDE CONTENT VERSION */}
                
            </Switch>
        </Router>
       
    )
}

export default Routes;