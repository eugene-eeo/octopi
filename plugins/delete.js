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

  for (var i = toDelete.length; i--;) {
    var id = toDelete[i];

    for (var j = length + 1; j--;) {
      var ids = trees[j].$$;
      ids.splice(ids.indexOf(id), 1);
      if (j && !ids.length)
        delete trees[j-1][key[j-1]]
    }

    delete this.table[id];
  }
};
