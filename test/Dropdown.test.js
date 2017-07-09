import React from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const output = renderer.create(
    <Dropdown
      items={[
        { title: 'English', url: 'https://webpack.js.org/' },
        { title: '中文', url: 'https://doc.webpack-china.org/' }
      ]}
    />
  ).toJSON();

  expect(output).toMatchSnapshot();
});
