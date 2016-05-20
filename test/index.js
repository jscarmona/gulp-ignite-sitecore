import chai from 'chai';
import * as task from '../src';

const expect = chai.expect;

describe('sitecore modules', () => {
  it('should export an object', () => {
    expect(task).to.be.a('object');
  });
});
