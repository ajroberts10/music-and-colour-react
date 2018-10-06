import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Some Random Stuff {new Date().getFullYear()}</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
