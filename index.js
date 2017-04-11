var sortBy = function (getValue, array) {
  return array.slice(0).sort(function(a, b) {
    var av = getValue(a)
    var bv = getValue(b)
    return av < bv ? -1 : av > bv ? 1 : 0
  })
}

module.exports = sortBy
