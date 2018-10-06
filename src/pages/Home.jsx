import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Welcome" subtitle="Something cool" />
                <div className="container">
                    <h2>Welcome</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a posuere felis. Etiam luctus eget elit eu euismod. Etiam ac vehicula lectus. Proin fermentum turpis efficitur pretium laoreet. Aliquam nec feugiat tellus, non condimentum augue. Integer tristique aliquet mauris, quis porta quam feugiat sit amet. Vivamus vel mauris non sem tincidunt interdum a sit amet erat.
                    </p>

                    <p>
                        Aliquam vehicula ex a dui fringilla, vel gravida mi blandit. Ut eros neque, ornare a leo at, aliquet bibendum nibh. Nunc aliquet, metus vel efficitur consectetur, est lorem ultrices enim, non faucibus sem arcu ac tellus. Cras a velit ipsum. Nulla facilisi.
                    </p>
                    <p>
                        Vivamus eget elit id neque facilisis vehicula. Aliquam at dolor egestas, pharetra tellus sit amet, consectetur est. Nam magna nisl, auctor sit amet lorem sed, vulputate gravida nisl.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
