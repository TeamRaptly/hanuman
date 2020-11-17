import React from 'react';
import { shallow } from 'enzyme';
import About from './about';

describe('about page component', () => {
  const WrappedComponent = About.WrappedComponent;
  const mockLocale = {
    'auth.about-page': 'about page'
  };
  const props = {
    t: (key) => mockLocale[key]
  };

  it('renders without crashing', () => {
    const component = shallow(<WrappedComponent {...props} />);

    expect(component).toMatchSnapshot();
  });
});
