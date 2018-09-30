import React, { Component } from "react";
import './Main.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import CV from "./CV";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="header">
                        <a className="appName"> Just simple CV-viewer </a>
                        <ul>
                            <li><NavLink className="nl" activeClassName="nla" exact to="/">Home</NavLink></li>
                            <li><NavLink className="nl" activeClassName="nla" to="/cv">CV</NavLink></li>
                            <li><NavLink className="nl" activeClassName="nla" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/cv" component={CV}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;