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
  t.is(countOdd(BigInt(0)), BigInt(0))
  t.is(countOdd(BigInt(1)), BigInt(1))
  t.is(countOdd(BigInt(2)), BigInt(1))
  t.is(countOdd(BigInt(3)), BigInt(2))
  t.is(countOdd(BigInt(4)), BigInt(2))
})

test('countEven', (t) => {
  t.is(countEven(BigInt(0)), BigInt(0))
  t.is(countEven(BigInt(1)), BigInt(0))
  t.is(countEven(BigInt(2)), BigInt(1))
  t.is(countEven(BigInt(3)), BigInt(1))
  t.is(countEven(BigInt(4)), BigInt(2))
})

test('sumAll', (t) => {
  t.is(sumAll(BigInt(0)), BigInt(0))
  t.is(sumAll(BigInt(1)), BigInt(1))
  t.is(sumAll(BigInt(2)), BigInt(3))
  t.is(sumAll(BigInt(3)), BigInt(6))
  t.is(sumAll(BigInt(4)), BigInt(10))
})

test('sumEven', (t) => {
  t.is(sumEven(BigInt(0)), BigInt(0))
  t.is(sumEven(BigInt(1)), BigInt(2))
  t.is(sumEven(BigInt(2)), BigInt(6))
  t.is(sumEven(BigInt(3)), BigInt(12))
  t.is(sumEven(BigInt(4)), BigInt(20))
})

test('sumOdd', (t) => {
  t.is(sumOdd(BigInt(0)), BigInt(0))
  t.is(sumOdd(BigInt(1)), BigInt(1))
  t.is(sumOdd(BigInt(2)), BigInt(4))
  t.is(sumOdd(BigInt(3)), BigInt(9))
  t.is(sumOdd(BigInt(4)), BigInt(16))
})

test('findBestMatch: sumAll', (t) => {
  const result = findBestMatch({
    transform: sumAll,
    heuristic: revSumAll,
    target: BigInt(1000),
  })
  t.deepEqual(result, {
    i: BigInt(44),
    value: BigInt(990),
    attempts: BigInt(2),
  })
})

test('findBestMatch: sumOdd', (t) => {
  const result = findBestMatch({
    transform: sumOdd,
    heuristic: revSumOdd,
    target: BigInt(1000),
  })
  t.deepEqual(result, {
    i: BigInt(31),
    value: BigInt(961),
    attempts: BigInt(2),
  })
})

test('findBestMatch: sumEven', (t) => {
  const result = findBestMatch({
    transform: sumEven,
    heuristic: revSumEven,
    target: BigInt(1000),
  })
  t.deepEqual(result, {
    i: BigInt(31),
    value: BigInt(992),
    attempts: BigInt(2),
  })
})

test('findBestMatch: sumEven + sumAll', (t) => {
  const result = findBestMatch({
    transform: (n) => sumEven(n + BigInt(10)) - sumAll(BigInt(10)),
    heuristic: (n) => revSumEven(n) - BigInt(10),
    target: BigInt(1000),
  })
  t.deepEqual(result, {
    i: BigInt(21),
    value: BigInt(937),
    attempts: BigInt(2),
  })
})
