import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'><i className="fa fa-home fa-lg nav-icon" />Home</Link></li>
                            <li><Link to='/aboutus'><i className="fa fa-info fa-lg nav-icon" />About</Link></li>
                            <li><Link to='/contactus'><i className="fa fa-address-card fa-lg nav-icon" />Contact</Link></li>
                        </ul>

                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon" href="https://www.behance.net/sarafrucht"><i className="fa fa-behance-square" /></a>{' '}
                        <a className="btn btn-social-icon" href="https://www.linkedin.com/in/sara-frucht/"><i className="fa fa-linkedin-square" /></a>{' '}
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Email</h5>
                        <a role="button" className="btn btn-link" href="mailto:sfrucht@lmi.net"><i className="fa fa-envelope-o" /> sfrucht@lmi.net</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;