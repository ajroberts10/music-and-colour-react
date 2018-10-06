import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders the Footer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('.footer').exists()).toEqual(true);
});
