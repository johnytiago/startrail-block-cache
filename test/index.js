const expect = require('chai').expect

const CacheStore = require('..')
const store = new CacheStore()

const block1 = {
  cid: "randomHash"
}

describe('CacheStore Unit Tests', function() {
  it('should return null when the value is not present', function() {
    expect(store.get(block1)).to.be.undefined;
  });
  it('should return not 0 when inserting', function() {
    expect(store.push(block1)).to.not.be.null;
  });
  it('should return the block', function() {
    expect(store.get(block1)).to.not.be.null;
  });
});
