import React from 'react';
import { shallow } from 'enzyme';
import About from './about';

describe('about page component', () => {
  it('renders without crashing', () => {
    const component = shallow(<About />);

    expect(component).toMatchSnapshot();
  });
});
