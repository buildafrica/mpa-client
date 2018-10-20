import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from '../About';

describe('Test About.js', () => {
  it('Component Rendered', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
