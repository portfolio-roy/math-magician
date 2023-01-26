import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quotes';

it('renders when there is quote', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
