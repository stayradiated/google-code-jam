c = -1
b = Math.abs
require('readline')
  .createInterface({ input: process.stdin })
  .on('line', (l) => {
    c++
    if (!c) return
    o = 'IMPOSSIBLE'
    ;[x, y, m] = l.split(' ')
    i = 0
    for (z of m) {
      i++
      z == 'S' ? y-- : z == 'N' ? y++ : z == 'E' ? x++ : x--
      d = b(x) + b(y)
      if (d <= i) {
        o = i
        break
      }
    }
    console.log(`Case #${c}: ` + o)
  })
