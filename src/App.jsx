import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Events from './Events';
import Contact from './Contact';
import Login from './Login';
import Navbar from './Navbar';
import {Switch , Route, Redirect} from 'react-router-dom';

const App = () => {
    return (
        <>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/"/>
          </Switch>
        </>
    );
};

export default App;
