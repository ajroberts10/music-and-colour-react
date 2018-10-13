import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { GET_SETLIST_QUERY } from '../../queries/get_setlist.jsx';
import SetlistItem from './SetlistItem';
import './Setlist.scss';


class Setlist extends Component {
    constructor() {
        super();
        this.state = { setlistItems: undefined };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event, setlist) {
        const searchQuery = event.target.value.toLowerCase();
        const searchResults = setlist.filter((item) => {
            const titleMatch = item.title.toLowerCase();
            const artistMatch = item.artist.toLowerCase();
            return titleMatch.indexOf(searchQuery) !== -1 || artistMatch.indexOf(searchQuery) !== -1;
        });
        this.setState({
            setlistItems: searchResults
      })
    }

    render() {
        return (
        <Query query={GET_SETLIST_QUERY}>
            {({loading, error, data: { setlist }}) => {
                const setlistItems = this.state.setlistItems || setlist;
                if (loading) return <p>Loading ...</p>;
                if (error) return <p>Error ...</p>;
                return (
                    <div className="setlist">
                        <div className="container">
                            <div className="row">
                                <input
                                    className="form-control form-control-lg setlist__search"
                                    type="text"
                                    onChange={(e) => {this.handleSearch(e, setlist)}}
                                    placeholder="Search for song"
                                />
                            </div>
                            <div className="row">
                                <ul className="setlist__list">
                                    {
                                        setlistItems.map(item => <SetlistItem key={item.title} itemData={item} />)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                )}}
        </Query>
    )}
};

export default Setlist;
