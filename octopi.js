Octopi = function(words) {
  if (!(this instanceof Octopi))
    return new Octopi(words);
  this.tree = {};
  (words || []).forEach(this.add);
};

Octopi.prototype = {
  add: function(word) {
    var sub = this.tree;
    for (var i = 0; i < word.length; i++) {
      var c = word[i];
      sub = sub[c] || (sub[c] = {});
      sub.$$
        ? sub.$$.push(word)
        : (sub.$$ = [word]);
    }
  },

  words: function() {
    return this.tree.$$;
  },

  get: function(word) {
    var sub = this.next(word);
    return sub && sub.words();
  },

  next: function(word) {
    var sub = this.tree;
    for (var i = 0; i < word.length; i++) {
      var c = word[i];
      sub = sub[c];
      if (!sub) return;
    }
    var oct = new Octopi();
    oct.tree = sub;
    return oct;
  }
};
