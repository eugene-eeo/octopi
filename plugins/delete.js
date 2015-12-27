Octopi.prototype.delete = function(word) {
  var sub = this.tree;
  var parts = [sub];
  var length = word.length;

  for (var i = 0; i < length; i++) {
    var sub = sub[word[i]];
    if (!sub) return;
    parts.push(sub);
  }
  delete sub.$$;

  for (var i = (length + 1); i--;) {
    var tree = parts[i];
    if ('$$' in tree) break;
    if (i)            delete parts[i-1][word[i-1]];
  }
};
