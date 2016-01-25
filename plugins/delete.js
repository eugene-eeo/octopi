Octopi.prototype.delete = function(key) {
  var sub = this.tree;
  var trees = [sub];
  var length = key.length;

  for (var i = 0; i < length; i++) {
    if (!(sub = sub[key[i]]))
      return;
    trees.push(sub);
  }

  var toDelete = sub.$$;

  for (var i = toDelete.length; i--;) {
    var id = toDelete[i];

    for (var j = trees.length; j--;) {
      var ids = trees[j].$$;
      ids.splice(ids.indexOf(id), 1);
      if (j && !ids.length)
        delete trees[j-1][key[j-1]];
    }

    delete this.table[id];
  }
};
