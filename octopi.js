Octopi = function(words) {
  this.uid = 0;
  this.tree = {$$: []};
  this.table = {};
  words = (words || []);
  for (var i = 0; i < words.length; i++)
    this.add(words[i]);
};

Octopi.prototype = {
  constructor: Octopi,
  /**
     * Add data to the trie
     * @param key String prefix to look up
     * @param data Object returned by trie
     */
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

  /**
     * Return the list of elements in the trie for a given query
     * @param key String The prefix to lookup
     */
  get: function(key) {
    var sub = this.tree;
    var tbl = this.table;
    for (var i = 0; i < key.length; i++)
      if (!(sub = sub[key[i]]))
        return [];

    return sub.$$.map(function(id) {
      return tbl[id];
    });
  }
  /**
     * Serialize the Octopi trie as string
     *
     * @return String
     */
  serialize: function(){
    
    var o = new Object();
    o.uid = this.uid;
    o.tree = this.tree;
    o.table = this.table;

    return JSON.stringify(o);

  },  
  /**
     * Take serialized Octopi data as string and initialize the Octopi object
     * @param json String The serialized Octopi trie
     */
  load: function(json){
    var o = JSON.parse(json);
    this.uid = o.uid;
    this.tree = o.tree;
    this.table = o.table;
  }
};
