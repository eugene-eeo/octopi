# octopi.js

<img src='media/octopi.png' align='right'/>

Micro (0.5kB) trie based suggestions library,
made with autocompletion and low memory consumption
in mind.

```js
var oct = Octopi(['bird', 'boy']);
oct.add('bid', {'word': 'BID'});
oct.get('bi');   // => ['bird', {'word':'BID'}]
oct.next('b')
   .next('i')
   .next('r')    // no need to check 'bir' again!
   .words()      // => ['bird']
```

### Installation

```sh
$ bower install eugenee-eeo/octopi
```
