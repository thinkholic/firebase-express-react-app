import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    shallow(<App />);
  });
});
