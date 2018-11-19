import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row footer__icon-set">
                        <a className="footer__link" href="https://www.facebook.com/musicandcolouruk" target="_blank">
                            <FontAwesomeIcon className="footer__link-icon" icon={faFacebook} size="3x" />
                        </a>
                        <a className="footer__link" href="https://www.instagram.com/musicandcolouruk/" target="_blank">
                            <FontAwesomeIcon className="footer__link-icon" icon={faInstagram} size="3x" />
                        </a>
                    </div>
                    <div className="row footer__subtitle">
                        <p className="text-muted">Copyright &copy; Music&Colour {new Date().getFullYear()}</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
