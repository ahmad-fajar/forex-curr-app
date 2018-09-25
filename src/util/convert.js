// convert from currencies key-value JSON
// to array so can be looped using
// forEach or map
exports.currencyObjToArr = obj => {
  let arr = []

  for (var key in obj) {
    arr.push({
      code: key,
      name: obj[key]
    })
  }

  return arr
}
