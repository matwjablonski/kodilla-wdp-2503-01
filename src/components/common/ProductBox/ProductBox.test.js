import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';
import * as reactRedux from 'react-redux';

describe('Component ProductBox', () => {
  beforeEach(() => {
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(jest.fn());
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation(selector => selector({ compared: [] }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    const component = shallow(
      <ProductBox id='abc' name='Test name' price={99} stars={4} />
    );
    expect(component).toBeTruthy();
  });
});
