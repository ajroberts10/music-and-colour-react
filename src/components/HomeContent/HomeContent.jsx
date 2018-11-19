import React, { Component } from 'react';
import './HomeContent.scss';

import icon from '../../images/music.ico'

class HomeContent extends Component {
    render() {
        return (
            <div className="home-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src="https://res.cloudinary.com/musicandcolour/image/upload/c_fill,ar_1:1,g_auto,r_max,/v1541170507/acoustic_f5k0kb.jpg" className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4><img className="home-content__bullet" src={icon} alt="" />Live Music</h4>
                            <p className="text-muted">Nothing beats live music for creating the perfect atmosphere. Our experienced acoustic musicians offer sets to suit a variety of genres and tastes; from classNameic rock to soul and R & B, bringing your event to life.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4><img className="home-content__bullet" src={icon} alt="" />DJ</h4>
                            <p className="text-muted">Get your guests on the floor dancing the night away - you name the decade and we'll bring the tunes! Full lighting and sound set-up can be included and customised for any performance.</p>
                        </div>
                        <div className="col-md-6 how-img">
                            <img src="https://res.cloudinary.com/musicandcolour/image/upload/c_fill,ar_1:1,g_auto,r_max,/v1541170785/dj_x4jylh.jpg" className="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src="https://res.cloudinary.com/musicandcolour/image/upload/c_fill,ar_1:1,g_auto,r_max,/v1541171083/speaker_ptczsp.jpg" className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4><img className="home-content__bullet" src={icon} alt="" />Audio Visual</h4>
                            <p className="text-muted">Let us ensure your event is a smooth success story with our extensive audio-visual expertise and equipment. We can provide sound equipment for live music events as well as AV services for corporate functions and conferences.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContent;
