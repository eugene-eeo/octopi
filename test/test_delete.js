describe('Octopi.delete', function() {
  var oct = new Octopi(['b', 'bi', 'bid']);

  it('deletes the entry from the table', function() {
    oct.delete('bid');
    for (var i in oct.table)
      assert.notEqual(oct.table[i], 'bid');
  });

  it(".get doesn't include the entry", function() {
    assert.deepEqual(oct.get(''), ['b', 'bi']);
  });

  it('compacts the tree', function() {
    assert.notOk('d' in oct.tree['b']['i']);
  });
});
