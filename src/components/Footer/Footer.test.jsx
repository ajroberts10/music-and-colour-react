import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer';

describe('the Footer', () => {
  it('renders the footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.footer').exists()).toEqual(true);
  });

  it('renders the social media links', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(FontAwesomeIcon).length).toEqual(2);
  })
});
