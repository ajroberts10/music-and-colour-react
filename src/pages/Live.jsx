import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Setlist from '../components/Setlist/Setlist';
import Jumbotron from '../components/Jumbotron/Jumbotron';

class Live extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Live" subtitle="Something cool" />
                <div className="container">
                    <h2>Live</h2>
                    <Setlist />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Live;
