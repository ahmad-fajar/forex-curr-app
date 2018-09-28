export const currencyFormatter = val => {
  let div = ('' + val).split('.')
  let revLeft = div[0].split('').reverse()
  let result = []
  
  let decimals = (div.length > 1 && div[1] !== '00') ? '.' + div[1].slice(0,2) : ''

  let count = 0
  for (var i = 0; i <= revLeft.length - 1; i++) {
    if (count !== 0 && count % 3 === 0) result.push(revLeft[i] + ',')
    else result.push(revLeft[i])
    count++
  }

  return result.reverse().join('') + decimals
}

export const eRFormatter = (er = 0) => {
  let left = ('' + er).split('.')[0]

  if (left === '0') return er.toFixed(4)
  else return er.toFixed(2)
}
