Octopi.prototype.delete = function(word) {
  var sub = this.tree;
  var parts = [];
  var length = word.length;

  for (var i = 0; i < length; i++) {
    var sub = sub[word[i]];
    if (!sub)
      return;
    if (i == length - 1)
      delete sub.$$;
    parts.push(sub);
  }
  for (var i=length; i--;) {
    var t = parts[i];
    if (i) {
      if (!('$$' in t))
        delete parts[i-1][word[i]]
    }
  }
};
