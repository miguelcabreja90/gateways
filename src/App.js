/**
 * Created by Migue on 18/1/2019.
 */
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Index from './components/home/index';
import Gateway from './components/gateway/list.cmp';
import Peripheral from './components/peripheral/list.cmp';
import NewGateway from './components/gateway/create.cmp';
import EditGateway from './components/gateway/edit.cmp';
import DetailGateway from './components/gateway/details.cmp';
import NewPeripheral from './components/peripheral/create.cmp';
import EditPeripheral from './components/peripheral/edit.cmp';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <Link to={'/home'} className="navbar-brand">React </Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/home'} className="nav-link fa fa-home"> Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/gateway/listing'} className="nav-link fa fa-laptop"> Gateway </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/peripheral/listing'} className="nav-link fa fa-usb"> Peripheral </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route path='/home' component={ Index }/>
                    </Switch>
                    <Switch>
                        <Route path='/gateway/listing' component={ Gateway }/>
                    </Switch>
                    <Switch>
                        <Route path='/peripheral/listing' component={ Peripheral }/>
                    </Switch>
                    <Switch>
                        <Route path='/gateway/create' component={ NewGateway }/>
                    </Switch>
                    <Switch>
                        <Route path='/peripheral/create' component={ NewPeripheral }/>
                    </Switch>
                    <Switch>
                        <Route path='/gateway/edit/:id' component={ EditGateway }/>
                    </Switch>
                    <Switch>
                        <Route path='/peripheral/edit/:id' component={ EditPeripheral }/>
                    </Switch>
                    <Switch>
                        <Route path='/gateway/details/:id' component={ DetailGateway }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;