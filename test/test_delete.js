describe('Octopi.delete', function() {
  var oct = new Octopi(['bid', 'bi', 'b']);

  it('deletes the entry from the table', function() {
    oct.delete('bi');
    for (var i in this.table)
      assert.notOk(/bi/.test(this.table[i]));
  });

  it(".get doesn't include the entry", function() {
    assert.deepEqual(oct.get(''), ['b']);
  });

  it('compacts the tree', function() {
    assert.notOk('i' in oct.tree['b']);
  });
});
