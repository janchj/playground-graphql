// @flow

import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql';

import { describe, it } from 'mocha';
import { expect } from 'chai';

import { recipe, hop, yeast } from '../../../schema/types';

describe('type: recipe', () => {
  it('should have an id field of type GraphQLID', () => {
    expect(recipe.getFields()).to.have.property('id');
    expect(recipe.getFields().id.type).to.deep.equals(GraphQLID);
  });

  it('should have a name field of type GraphQLString', () => {
    expect(recipe.getFields()).to.have.property('name');
    expect(recipe.getFields().name.type).to.deep.equals(GraphQLNonNull(GraphQLString));
  });

  it('should have a style field of type GraphQLString', () => {
    expect(recipe.getFields()).to.have.property('style');
    expect(recipe.getFields().style.type).to.deep.equals(GraphQLNonNull(GraphQLString));
  });

  it('should have a hops field of type hop list', () => {
    expect(recipe.getFields()).to.have.property('style');
    expect(recipe.getFields().hops.type).to.deep.equals(GraphQLList(hop));
  });

  it('should have a yeast field of type yeast list', () => {
    expect(recipe.getFields()).to.have.property('style');
    expect(recipe.getFields().yeast.type).to.deep.equals(GraphQLList(yeast));
  });
});
