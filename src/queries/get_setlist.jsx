import gql from 'graphql-tag';

export const GET_SETLIST_QUERY = gql`
    {
        setlist {
            title,
            artist
        }
    }
`;
