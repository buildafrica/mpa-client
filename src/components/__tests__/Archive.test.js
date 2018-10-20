import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Archive from '../Archive';

describe('Test Archive.js', () => {
  it('Component Rendered', () => {
    const wrapper = shallow(<Archive />);
    expect(wrapper).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
