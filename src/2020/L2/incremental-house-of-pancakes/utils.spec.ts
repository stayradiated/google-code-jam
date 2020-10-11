import test from 'ava'

import {
  findBestMatch,
  sumAll,
  revSumAll,
  sumOdd,
  revSumOdd,
  sumEven,
  revSumEven,
  countEven,
  countOdd,
} from './utils'

test('countOdd', (t) => {
  t.is(countOdd(0), 0)
  t.is(countOdd(1), 1)
  t.is(countOdd(2), 1)
  t.is(countOdd(3), 2)
  t.is(countOdd(4), 2)
})

test('countEven', (t) => {
  t.is(countEven(0), 0)
  t.is(countEven(1), 0)
  t.is(countEven(2), 1)
  t.is(countEven(3), 1)
  t.is(countEven(4), 2)
})

test('sumAll', (t) => {
  t.is(sumAll(0), 0)
  t.is(sumAll(1), 1)
  t.is(sumAll(2), 3)
  t.is(sumAll(3), 6)
  t.is(sumAll(4), 10)
})

test('sumEven', (t) => {
  t.is(sumEven(0), 0)
  t.is(sumEven(1), 2)
  t.is(sumEven(2), 6)
  t.is(sumEven(3), 12)
  t.is(sumEven(4), 20)
})

test('sumOdd', (t) => {
  t.is(sumOdd(0), 0)
  t.is(sumOdd(1), 1)
  t.is(sumOdd(2), 4)
  t.is(sumOdd(3), 9)
  t.is(sumOdd(4), 16)
})

test('findBestMatch: sumAll', (t) => {
  const result = findBestMatch({
    transform: sumAll,
    heuristic: revSumAll,
    target: 1000,
  })
  t.deepEqual(result, {
    i: 44,
    value: 990,
    attempts: 2,
  })
})

test('findBestMatch: sumOdd', (t) => {
  const result = findBestMatch({
    transform: sumOdd,
    heuristic: revSumOdd,
    target: 1000,
  })
  t.deepEqual(result, {
    i: 31,
    value: 961,
    attempts: 2,
  })
})

test('findBestMatch: sumEven', (t) => {
  const result = findBestMatch({
    transform: sumEven,
    heuristic: revSumEven,
    target: 1000,
  })
  t.deepEqual(result, {
    i: 31,
    value: 992,
    attempts: 2,
  })
})

test('findBestMatch: sumEven + sumAll', (t) => {
  const result = findBestMatch({
    transform: (n) => sumEven(n + 10) - sumAll(10),
    heuristic: (n) => revSumEven(n) - 10,
    target: 1000,
  })
  t.deepEqual(result, {
    i: 21,
    value: 937,
    attempts: 2,
  })
})
