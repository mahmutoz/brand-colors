import React from 'react';
import renderer from 'react-test-renderer';

import Brands from '..\src\component\Brands.js';

describe('<Brands />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Brands />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });