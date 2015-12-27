# octopi.js

Fast and pluggable trie based suggestions library,
made with autocompletion and memory friendliness
in mind.

```js
var oct = Octopi(['bird', 'boy', 'bid']);
oct.get('bi');  // => ['bird', 'bid']
oct.has('bid')  // => true
oct.next('b')
   .next('i')
   .next('r')
   .words()    // => ['bird']
```
