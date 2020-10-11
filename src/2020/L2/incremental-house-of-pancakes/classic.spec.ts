import test from 'ava'

import classicSolver from './classic'

const testCases = [
  ['1 2', '1 1 1'],
  ['2 2', '2 1 0'],
  ['8 11', '5 0 4'],
  ['10 10', '5 1 4'],
  ['10 11', '5 4 2'],
  ['10 12', '5 2 5'],
]

testCases.forEach((testCase, index) => {
  const [input, output] = testCase

  test(`${index}. ${input} →  ${output}`, (t) => {
    t.is(classicSolver(input), output)
  })
})
