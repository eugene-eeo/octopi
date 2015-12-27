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
    }
    sub.$$ = word;
  },

  words: function() {
    return (function search(subtree) {
      var a = [];
      for (var c in subtree) {
        var t = subtree[c];
        c == '$$'
          ? a.push(t)
          : (a = a.concat(search(t)));
      }
      return a;
    })(this.tree);
  },

  get: function(word) {
    var sub = this.next(word);
    return sub && sub.words();
  },

  next: function(word) {
    var sub = this.tree;
    for (var i = 0; i < word.length; i++)
      if (sub = sub[word[i]], !sub)
        return;
    var oct = new Octopi();
    oct.tree = sub;
    return oct;
  }
};
