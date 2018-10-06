import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Tracks from '../components/Tracklist/Tracks';

class Demos extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Demos" subtitle="Something cool" />
                <div className="container">
                    <h2>Demos</h2>
                    <Tracks />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Demos;
