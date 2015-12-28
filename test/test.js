var assert = chai.assert;

describe('Octopi(words)', function() {
  it('indexes the words', function() {
    var o = new Octopi(['bi', 'bir', 'bird']);
    assert.deepEqual(o.get('b'), ['bi', 'bir', 'bird']);
  });
});

describe('Octopi constructor', function() {
  it('returns the constructor function', function() {
    var o = new Octopi();
    assert.deepEqual(o.constructor, Octopi);
  });
});

describe('Octopi.add', function() {
  it('allows arbitrary data to be added', function() {
    var o = new Octopi();
    o.add('bird', 1);
    assert.deepEqual(o.get('bird'), [1]);
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

  it('returns an empty array if there are no matches', function() {
    assert.deepEqual(o.get('c'), []);
  });
});
