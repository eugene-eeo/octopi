Octopi.prototype.delete = function(key) {
  var sub = this.tree;
  var trees = [sub];
  var length = key.length;

  for (var i = 0; i < length; i++) {
    sub = sub[key[i]];
    if (!sub)
      return;
    trees.push(sub);
  }

  var toDelete = sub.$$;
  var toDeleteLength = toDelete.length;

  for (var i = length + 1; i--;) {
    var ids = trees[i].$$;
    for (var j=toDeleteLength; j--;) {
      ids.splice(ids.indexOf(ids[j]), 1);
    }
    if (i && !ids.length)
      delete trees[i-1][key[i-1]]
  }

  for (var i = toDeleteLength; i--;) {
    delete this.table[toDelete[i]];
  }
};
