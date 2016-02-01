/* eslint-env mocha */

import { expect } from 'chai';
import { mix } from '../src/index.js';

describe('mixanator', function () {
  describe('mix', function () {
    it('returns a function', function () {
      expect(mix((x) => x))
        .to.be.a('function');
    });

    it('composes functions from left to right', function () {
      expect(mix((x) => x / 2, (x) => x * 2)(2))
        .to.equal(2);
    });

    it('adds a extend method to the returned function', function () {
      expect(mix((x) => x / 2, (x) => x * 2))
        .to.have.property('extend');
    });
  });

  describe('extend', function () {
    it('composes the new functions with the old functions', function () {
      expect(mix((x) => x / 2, (x) => x * 2).extend(x => x * 2, x => x * 2)(2))
        .to.equal(8);
    });
  });
});
