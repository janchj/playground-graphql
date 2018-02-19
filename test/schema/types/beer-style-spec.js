// @flow

import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import { describe, it } from 'mocha';
import { expect } from 'chai';

import { beerStyle } from '../../../schema/types';

describe('type: beer style', () => {
  it('should have an id field of type GraphQLID', () => {
    expect(beerStyle.getFields()).to.have.property('id');
    expect(beerStyle.getFields().id.type).to.deep.equals(GraphQLID);
  });

  it('should have a name field of type GraphQLString', () => {
    expect(beerStyle.getFields()).to.have.property('name');
    expect(beerStyle.getFields().name.type).to.deep.equals(GraphQLNonNull(GraphQLString));
  });
});
