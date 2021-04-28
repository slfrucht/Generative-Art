import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";


const mapStateToProps = state => {
    return {
        animations: state.animations
    };
}

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <div>
                   <Home />
                </div>
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/aboutus" component={About} />
                    <Route path="/contactus" component={Contact} />
                    <Redirect to="./home" />
                </Switch>
            </div>
        )
    }
}

export default  withRouter(connect(mapStateToProps)(Main));