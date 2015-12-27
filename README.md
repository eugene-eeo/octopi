# octopi.js

<img src='media/octopi.png' align='right'/>

Micro (0.55kB) trie based suggestions library,
made with autocompletion and low memory consumption
in mind.

```js
var oct = Octopi(['bird', 'boy', 'bid']);
oct.get('bi');  // => ['bird', 'bid']
oct.next('b')
   .next('i')
   .next('r')   // no need to check 'bir' again!
   .words()     // => ['bird']
```

### Installation

```sh
$ bower install eugenee-eeo/octopi
```
