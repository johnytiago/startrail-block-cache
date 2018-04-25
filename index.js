module.exports = class CacheStore {
  constructor() {
    this.store = [];
  }
  get(block) {
    if (!this.store.length)
      return 

    return this.store.find(function(b) {
        return block.cid === b.cid;
    });
  }

  push(blocks) {
    if (!Array.isArray(blocks))
      blocks = [blocks]

    blocks.forEach( b => {
      if (this.store.indexOf(b) === -1) 
        return this.store.push(b)
    })
  }
}
