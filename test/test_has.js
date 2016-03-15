describe('Octopi.has', function() {
  var oct = new Octopi(['abc', 'def']);

  it('returns true if the key is present', function() {
    assert(oct.has('abc') === true);
    assert(oct.has('def') === true);
  });

  it('returns false if the key is not present', function() {
    assert(oct.has('ghi') === false);
  });

  it('returns true for partial matches', function() {
    assert(oct.has('a') === true);
  });
});
