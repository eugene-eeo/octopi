describe('Octopi.delete', function() {

  it('deletes the entry from the tree', function() {
    var o = new Octopi(['bird', 'bir', 'bi']);
    o.delete('bird');
    assert.deepEqual(o.get('bi'), ['bi', 'bir']);
  });

  it('compresses the tree', function() {
    var o = new Octopi(['123', '1']);
    o.delete('123');
    assert.deepEqual(o.tree, {
      '1': { '$$': '1' }
    });
  });

  it('does nothing if the word is not indexed', function() {
    var o = new Octopi(['bird']);
    o.delete('cava');
    assert.deepEqual(o.get('bird'), ['bird']);
  });

});
