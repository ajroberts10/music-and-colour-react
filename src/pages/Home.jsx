import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeContent from '../components/HomeContent/HomeContent';
import Footer from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Welcome" subtitle="Something cool" />
                <HomeContent />
                <Footer />
            </div>
        );
    }
}

export default Home;
