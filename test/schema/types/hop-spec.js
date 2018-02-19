// @flow

import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import { describe, it } from 'mocha';
import { expect } from 'chai';

import { hop } from '../../../schema/types';

describe('type: hop', () => {
  it('should have an id field of type GraphQLID', () => {
    expect(hop.getFields()).to.have.property('id');
    expect(hop.getFields().id.type).to.deep.equals(GraphQLID);
  });

  it('should have a name field of type GraphQLString', () => {
    expect(hop.getFields()).to.have.property('name');
    expect(hop.getFields().name.type).to.deep.equals(GraphQLNonNull(GraphQLString));
  });
});
