import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Track from './Track';

const Tracks = () => (
    <Query query={gql`
        {
            tracks {
                id
                title
                duration,
                stream_url
            }
        }
    `}>
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error ...</p>;
            console.log(data);

            return data.tracks.map(track => {
                console.log(track);
                return <Track key={track.id} trackData={track} />
            });
        }}
    </Query>
);

export default Tracks;
