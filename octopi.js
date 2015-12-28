Octopi = function(words) {
  this.uid = 0;
  this.tree = {$$: []};
  this.table = {};
  words = (words || []);
  for (var i = 0; i < words.length; i++)
    this.add(words[i]);
};

Octopi.prototype = {
  add: function(key, data) {
    var id = ++this.uid;
    var sub = this.tree;

    this.table[id] = data || key;
    sub.$$.push(id);

    for (var i = 0; i < key.length; i++) {
      var c = key[i];
      sub = sub[c] || (sub[c] = {$$:[]});
      sub.$$.push(id);
    }
  },

  get: function(key) {
    var sub = this.tree;
    for (var i = 0; i < key.length; i++)
      if (!(sub = sub[key[i]]))
        return [];
    return sub.$$.map(function(id) {
      return this.table[id];
    }.bind(this));
  }
};
