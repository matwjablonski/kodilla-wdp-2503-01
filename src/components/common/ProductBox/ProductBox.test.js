import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';
import * as reactRedux from 'react-redux';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

    const component = shallow(<ProductBox />);
    expect(component).toBeTruthy();
  });
});
