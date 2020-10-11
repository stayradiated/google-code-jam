import test from 'ava'

import solver from './solver'

/*
import classic from './classic'

for (let i = 3; i <= 4; i += 1) {
  const L = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(i)
  const R = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(i)
  const input = `${L} ${R}`
  test.serial(`${i}`, (t) => {
    const output = classic(input)
    t.is(solver(input), output, `Testing: ${input}`)
    console.log(input, output)
  })
}
*/

const testCases = [
  ['9007199254740994 9007199254740994', '189812530 118490769 23584504'],
  ['9007199254740995 9007199254740995', '189812530 118490770 23584505'],
]

testCases.forEach((testCase, index) => {
  const [input, output] = testCase

  test(`${index}. ${input} →  ${output}`, (t) => {
    t.is(solver(input), output)
  })
})
