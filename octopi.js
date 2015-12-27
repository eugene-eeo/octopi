Octopi = function(words) {
  if (!(this instanceof Octopi))
    return new Octopi(words);
  this.tree = {};
  (words || []).forEach(this.add.bind(this));
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
    var queue = [this.tree];
    var words = [];
    while (queue.length) {
      var t = queue.shift();
      for (var c in t) {
        var w = t[c];
        c == '$$'
          ? words.push(w)
          : queue.push(w);
      }
    }
    return words;
  },

  get: function(word) {
    return this.next(word).words();
  },

  next: function(word) {
    var sub = this.tree;
    for (var i = 0; i < word.length; i++)
      if (sub = sub[word[i]], !sub)
        break;
    var oct = new Octopi();
    oct.tree = sub || {};
    return oct;
  }
};
