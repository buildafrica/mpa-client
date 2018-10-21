import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

jest.mock('../components/About');
jest.mock('../components/Archive');
jest.mock('../components/Home');
jest.mock('../components/Login');
jest.mock('../components/Signup');
jest.mock('../components/ResetPassword');
jest.mock('../components/FourOhFour');

import App from '../AppRouter';
import About from '../components/About';
About.mockReturnValue(() => <div />);
import Archive from '../components/Archive';
Archive.mockReturnValue(() => <div />);
import Home from '../components/Home';
Home.mockReturnValue(() => <div />);
import Login from '../components/Login';
Login.mockReturnValue(() => <div />);
import Signup from '../components/Signup';
Signup.mockReturnValue(() => <div />);
import ResetPassword from '../components/ResetPassword';
ResetPassword.mockReturnValue(() => <div />);
import FourOhFour from '../components/FourOhFour';
FourOhFour.mockReturnValue(() => <div />);

describe('Test AppRouter.js', () => {
  it('Component Rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
