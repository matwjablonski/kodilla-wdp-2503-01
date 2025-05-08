import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

const mockState = {
  compared: [],
};

const mockReducer = (state = mockState, action) => state;
const mockStore = createStore(mockReducer);

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={mockStore}>
        <ProductBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
