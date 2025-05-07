import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';
import * as reactRedux from 'react-redux';

describe('Homepage', () => {
  it('renders without crashing', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation(selector => selector({ compared: [] }));

    shallow(<Homepage />);
  });
});
