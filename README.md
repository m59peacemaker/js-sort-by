# sort-array-by

Takes an array and sorts it by the values returned from the given function.

## install

```sh
$ npm install sort-array-by
```

## example

```js
const sortBy = require('sort-array-by')

sortBy(v => v.name, [
  { name: 'Andy', id: 1 },
  { name: 'Indy', id: 2 },
  { name: 'Jill', id: 3 },
  { name: 'Andy', id: 4 },
  { name: 'Jack', id: 5 }
])
/* => [
  { name: 'Andy', id: 1 },
  { name: 'Andy', id: 4 },
  { name: 'Indy', id: 2 },
  { name: 'Jack', id: 5 },
  { name: 'Jill', id: 3 }
] */
```

## api

### sortBy(getValue, array)

- `getValue(item)`
  - `item` an item from the array
  - `=> value` the value to compare to determine sort order
- `array: []` the array to sort
- `=> array` a sorted array
