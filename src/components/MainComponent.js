import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import ShortAnimations from "./ShortAnimsComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";


const mapStateToProps = state => {
    return {
        animations: state.animations,
        homePageElements: state.homePageElements
    };
}

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home homePageElements={this.props.homePageElements} />} />
                    <Route path="/shortanims" component={ShortAnimations} />
                    <Route path="/aboutus" component={About} />
                    <Route path="/contactus" component={Contact} />
                    <Redirect to="./home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default  withRouter(connect(mapStateToProps)(Main));