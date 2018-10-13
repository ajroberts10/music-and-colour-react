import React from 'react';
import renderer from 'react-test-renderer';
import wait from 'waait';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import { GET_SETLIST_QUERY } from '../../queries/get_setlist.jsx';
import Setlist from './Setlist';

let wrapper;

const mocks = [
    {
        request: {
            query: GET_SETLIST_QUERY
        },
        result: {
            data: {
                setlist: [
                    {
                        "title": "Black Magic Woman",
                        "artist": "Santana"
                    },
                    {
                        "title": "Babylon",
                        "artist": "David Grey"
                    },
                    {
                        "title": "Sail Away",
                        "artist": "David Grey"
                    }
                ]
            }
        }
    }
];

describe('the setlist', () => {
    beforeEach(() => {
        wrapper = mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Setlist />
            </MockedProvider>
        ));
    })

    it('renders without error', async () => {
        await wait(0);
        expect(wrapper.find('Setlist')).toHaveLength(1);
    });

    it('displays the provided setlist in a list', async () => {

        await wait(0);
        const setListItem = wrapper
            .update()
            .find('SetlistItem')
            .first();

        expect(setListItem.find('.setlistItem__title').text()).toContain('Black Magic Woman');
        expect(setListItem.find('.setlistItem__artist').text()).toContain('Santana');
    });

    it('displays the correct setlist items based on a search term', async () => {

        await wait(0);
        wrapper.update().find('input').simulate('change', {
            target: { value: 'David' }
        });

        expect(wrapper.update().find('SetlistItem')).toHaveLength(2);
    })
});
