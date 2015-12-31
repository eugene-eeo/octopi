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

  var id;
  var ids = sub.$$;
  var arr = [];
  for (var i in sub)
    if (i !== '$$')
      arr = arr.concat(sub[i].$$)

  for (var i = ids.length; i--;) {
    var id = ids[i];
    if (~arr.indexOf(id))
      continue;
    break;
  }

  for (var i = length + 1; i--;) {
    var ids = trees[i].$$;
    ids.splice(ids.indexOf(id), 1);
    if (i && !ids.length)
      delete trees[i-1][key[i-1]]
  }
  delete this.table[id];
};
