var test = require('tape')
var sortBy = require('./')

test('sortBy', function (t) {
  t.deepEqual(
    sortBy(function (v) { return v.name }, [
      { name: 'Andy', id: 1 },
      { name: 'Indy', id: 2 },
      { name: 'Jill', id: 3 },
      { name: 'Andy', id: 4 },
      { name: 'Jack', id: 5 }
    ]),
    [
      { name: 'Andy', id: 1 },
      { name: 'Andy', id: 4 },
      { name: 'Indy', id: 2 },
      { name: 'Jack', id: 5 },
      { name: 'Jill', id: 3 }
    ]
  )

  t.deepEqual(
    sortBy(function (v) { return v.id }, [
      { name: 'Andy', id: 1 },
      { name: 'Andy', id: 4 },
      { name: 'Indy', id: 2 },
      { name: 'Jack', id: 5 },
      { name: 'Jill', id: 3 }
    ]),
    [
      { name: 'Andy', id: 1 },
      { name: 'Indy', id: 2 },
      { name: 'Jill', id: 3 },
      { name: 'Andy', id: 4 },
      { name: 'Jack', id: 5 }
    ]
  )

  t.end()
})
