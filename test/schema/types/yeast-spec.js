// @flow

import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import { describe, it } from 'mocha';
import { expect } from 'chai';

import { yeast } from '../../../schema/types';

describe('type: yeast', () => {
  it('should have an id field of type GraphQLID', () => {
    expect(yeast.getFields()).to.have.property('id');
    expect(yeast.getFields().id.type).to.deep.equals(GraphQLID);
  });

  it('should have a name field of type GraphQLString', () => {
    expect(yeast.getFields()).to.have.property('name');
    expect(yeast.getFields().name.type).to.deep.equals(GraphQLNonNull(GraphQLString));
  });

  it('should have a yeast field of type GraphQLString', () => {
    expect(yeast.getFields()).to.have.property('type');
    expect(yeast.getFields().type.type).to.deep.equals(GraphQLNonNull(GraphQLString));
  });
});
