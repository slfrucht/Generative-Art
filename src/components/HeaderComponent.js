import React, { Component } from "react";
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        console.log("in toggle");
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="app-header">
                    <div className="container  pl-0">
                    <div className="row align-items-center">
                        <div className="col col-sm-4 col-md-3 pl-0 pr-0">
                            <img className="App-logo-shadow" src="assets/images/hex_logo_shadow.png"
                                height="90" width="90" alt="GenArt Logo" />

                            <img className="App-logo" src="assets/images/hex_logo.png"
                                height="90" width="90" alt="GenArt Logo" />
                        </div>
                        <div className="col-sm-8 col-md-9 px-sm-0 px-10 ml-0">
                            <h2 className="header-text float-md-left">Generative Art by Sara Frucht</h2>
                        </div>
                    </div>
                    </div>
                </Jumbotron>
                <Navbar color="dark" className="nav-class" dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/hex_logo.png"
                            height="30" width="30" alt="GenArt Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav  className="ml-auto" navbar>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg nav-icon" />Home
                                    </NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg nav-icon" />About
                                    </NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg nav-icon" />Contact us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>

            </React.Fragment>
        )

    }

}
export default Header;