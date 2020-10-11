import test from 'ava'

import solver from './solver'
import classic from './classic'

const randomN = (n: number) => {
  return Math.floor(Math.random() * n)
}

for (let i = 5; i <= 18; i += 1) {
  test.serial(`10e${i}`, (t) => {
    for (let j = 0; j < 10; j++) {
      const L = randomN(Math.pow(10, i))
      const R = randomN(Math.pow(10, i))
      const input = `${L} ${R}`
      const output = classic(input)
      t.is(solver(input), output, `Testing: ${input}`)
    }
  })
}
