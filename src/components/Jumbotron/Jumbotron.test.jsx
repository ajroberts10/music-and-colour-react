import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Jumbotron';

it('renders the Jumbotron', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('.jumbotron').exists()).toEqual(true);
});
