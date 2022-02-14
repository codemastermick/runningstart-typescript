import { hello } from '../src/index';
import { expect } from 'chai';

let result: string;

describe('Index Test Suite', function () {
  before(function (done) {
    result = hello();
    done();
  });

  describe('hello() should', function () {
    it('return a string', function () {
      expect(result).to.be.a.string;
    });
    it('have a default return of "Hello world!"', function () {
      expect(result).to.equal('Hello world!');
    });
    it('have a return of "Hello WORLD!" when passed WORLD', function () {
      result = hello('WORLD');
      expect(result).to.equal('Hello WORLD!');
    });
  });
});
