import test from 'ava'

import solver from './index'

const testCases = [
  ['4 4 SSSS', '4'],
  ['3 0 SNSS', 'IMPOSSIBLE'],
  ['2 10 NSNNSN', 'IMPOSSIBLE'],
  ['0 1 S', '1'],
  ['2 7 SSSSSSSS', '5'],
  ['3 2 SSSW', '4'],
  ['4 0 NESW', '4'],
]

testCases.forEach((testCase, index) => {
  const [input, output] = testCase

  test(`${index}. ${input} →  ${output}`, (t) => {
    t.is(solver(input), output)
  })
})
