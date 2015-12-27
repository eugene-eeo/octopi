# octopi.js

Fast and pluggable trie based suggestions library.

```js
var oct = Octopi(['bird', 'boy', 'bid']);
oct.get('bi');  // => ['bird', 'bid']
oct.has('bid')  // => true
```

'Streaming' support for when you need to implement
something like:
