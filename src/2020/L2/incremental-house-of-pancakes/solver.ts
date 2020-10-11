import {
  createSolver,
  countEven,
  countOdd,
  findBestMatch,
  revSumAll,
  revSumEven,
  revSumOdd,
  sumAll,
  sumEven,
  sumOdd,
} from './utils'

export const quickBalance = (L: number, R: number) => {
  if (L === R) {
    return { i: 0, L, R }
  }

  const diff = L > R ? L - R : R - L

  const { i, value } = findBestMatch({
    target: diff,
    transform: sumAll,
    heuristic: revSumAll,
  })

  if (L > R) {
    return { i, L: L - value, R }
  } else {
    return { i, L, R: R - value }
  }
}

const solver = createSolver((lIn, rIn) => {
  const { i, L, R } = quickBalance(lIn, rIn)

  const [Even, Odd, TEven] =
    i % 2 === 0
      ? R > L
        ? [L, R, 'L']
        : [R, L, 'R']
      : R > L
        ? [R, L, 'R']
        : [L, R, 'L']

  const oddOffset = sumOdd(countOdd(i))
  const evenOffset = sumEven(countEven(i))

  const odd = findBestMatch({
    transform: (n) => sumOdd(n + i) - oddOffset,
    heuristic: (n) => revSumOdd(n + oddOffset) - i,
    target: Odd,
  })

  const even = findBestMatch({
    transform: (n) => sumEven(n + i) - evenOffset,
    heuristic: (n) => revSumEven(n + evenOffset) - i,
    target: Even,
  })

  const iOut = 2 * i + odd.i + even.i
  const lOut = L - (TEven === 'L' ? even.value : odd.value)
  const rOut = R - (TEven === 'R' ? even.value : odd.value)

  return [iOut, lOut, rOut]
})

export default solver
