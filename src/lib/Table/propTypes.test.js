import React from 'react';
import { expect } from 'chai';

import propTypes, { columnHeader } from './propTypes';

it('requires `fetchItems`', () => {
  expect(propTypes.fetchItems).to.be.a('function');
});

it('requires `username`', () => {
  expect(propTypes.username).to.be.a('function');
});

it('requires `columns`', () => {
  expect(propTypes.columns).to.be.a('function');
});
