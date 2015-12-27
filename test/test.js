var assert = chai.assert;

describe('Octopi.words', function() {
  var o = new Octopi();
  o.add('ata');
  o.add('bird');
  o.add('cava');

  it('returns all the words', function() {
    var a = o.words().sort();
    assert.deepEqual(a, ['ata', 'bird', 'cava']);
  });
});

describe('Octopi.get', function() {
  var o = new Octopi();
  o.add('bird');
  o.add('bid');
  o.add('ata');

  it('returns all words starting with the given word', function() {
    var s1 = o.get('bi');
    var s2 = o.get('b');
    assert.deepEqual(s1, s2);

    var s3 = o.get('a');
    assert.deepEqual(s3, ['ata']);
  });

  it('returns undefined if there are no words', function() {
    assert.notOk(o.get('c'));
  });
});

describe('Octopi.next', function() {
  var o = new Octopi();
  o.add('bi');
  o.add('bir');
  o.add('bird');

  describe('the new instance', function() {
    var m = o.next('bir');
    assert(m instanceof Octopi);

    it('.words() returns the correct words', function() {
      var m = o.next('bir');
      assert.deepEqual(m.words(), ['bir', 'bird']);
    });

    it('.get() is prefixed', function() {
      var m = o.next('bir');
      assert.deepEqual(m.get('d'), ['bird']);
    });
  });

  it('returns undefined if there are no words', function() {
    var m = o.next('c');
    assert.notOk(m);
  });
});
