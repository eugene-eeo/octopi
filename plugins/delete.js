Octopi.prototype.delete = function(key) {
  var id;
  var sub = this.tree;
  var trees = [sub];
  var length = key.length;

  for (var i = 0; i < length; i++) {
    sub = sub[key[i]];
    if (!sub)
      return;
    trees.push(sub);
  }

  id = sub.$$[0];

  for (var i = length+1; i--;) {
    var ids = trees[i].$$;
    ids.splice(ids.indexOf(id), 1);
    if (i && !ids.length)
      delete trees[i-1][key[i-1]]
  }
  delete this.table[id];
};
