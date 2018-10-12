import React from 'react';
import renderer from 'react-test-renderer';
import wait from 'waait';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import { GET_SETLIST_QUERY } from '../../queries/get_setlist.jsx';
import Setlist from './Setlist';
import SetlistItem from './SetlistItem';

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
                    }
                ]
            }
        }
    }
];

describe('the setlist', () => {
    it('renders without error', () => {
        renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
              <Setlist />
            </MockedProvider>,
          );
    });

    it('displays the provided data in a list', async () => {
        const wrapper = mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Setlist />
            </MockedProvider>
        ));

        await wait(0);

        const setListItem = wrapper
            .update()
            .find('SetlistItem')
            .first();

        expect(setListItem.find('.setlistItem__title').text()).toContain('Black Magic Woman');
        expect(setListItem.find('.setlistItem__artist').text()).toContain('Santana');


    });
});
