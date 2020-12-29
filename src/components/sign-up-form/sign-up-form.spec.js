import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from '.';

describe('sign-up-form component', () => {
  const WrappedComponent = SignUpForm.WrappedComponent;
  const mockLocale = {
    'auth.sign-up': 'sign-up page',
    'auth.first-name': 'first name',
    'auth.last-name': 'last name',
    'auth.email-address': 'email address',
    'auth.phone-number': 'phone number',
    'auth.password': 'password',
    'auth.already-have-account': 'already have an account'
  };
  const props = {
    t: (key) => mockLocale[key]
  };

  it('renders correctly', () => {
    const component = shallow(<WrappedComponent {...props} />);

    expect(component).toMatchSnapshot();
  });
});
