# octopi.js

Micro (0.55kB) trie based suggestions library,
made with autocompletion and memory friendliness
in mind.

```js
var oct = Octopi(['bird', 'boy', 'bid']);
oct.get('bi');  // => ['bird', 'bid']
oct.next('b')
   .next('i')
   .next('r')   // no need to check 'bir' again!
   .words()     // => ['bird']
```
