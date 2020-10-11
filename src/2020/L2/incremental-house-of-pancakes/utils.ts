export type TransformFn = (i: bigint) => bigint
export type HeuristicFn = (i: bigint) => bigint

interface FindBestMatchOptions {
  heuristic: HeuristicFn,
  transform: TransformFn,
  target: bigint,
  maxAttempts?: bigint,
}

export const findBestMatch = (options: FindBestMatchOptions) => {
  const { heuristic, transform, target, maxAttempts = Infinity } = options

  let lowerBound = null
  let upperBound = null

  let i = heuristic(target)
  let value = transform(i)
  if (value === target) {
    return { i, value, attempts: BigInt(0) }
  }

  for (
    let attempts = BigInt(1);
    attempts <= maxAttempts;
    attempts += BigInt(1)
  ) {
    if (value > target) {
      upperBound = i
      i -= BigInt(1)
    } else if (value < target) {
      lowerBound = i
      i += BigInt(1)
    }

    value = transform(i)
    if (value === target) {
      return { i, value, attempts }
    }

    if (lowerBound != null && upperBound != null) {
      return {
        i: lowerBound,
        value: transform(lowerBound),
        attempts,
      }
    }
  }
  throw new Error('Tried too many times to find best match')
}

export const sumAll: TransformFn = (i) => {
  return (i * (i + BigInt(1))) / BigInt(2)
}

export const revSumAll: HeuristicFn = (n) => {
  return BigInt(Math.floor(Math.sqrt(Number(n * BigInt(2)))))
}

export const sumOdd: TransformFn = (i) => {
  return i ** BigInt(2)
}
export const revSumOdd: HeuristicFn = (n) => {
  return BigInt(Math.floor(Math.sqrt(Number(n))))
}

export const sumEven: TransformFn = (i) => {
  return i * (i + BigInt(1))
}
export const revSumEven: HeuristicFn = (n) => {
  return BigInt(Math.floor(Math.sqrt(Number(n))))
}

export const countOdd: TransformFn = (n) => {
  return n / BigInt(2) + (n % BigInt(2))
}

export const countEven: TransformFn = (n) => {
  return n / BigInt(2)
}

type Solver = (L: bigint, R: bigint) => [bigint, bigint, bigint]

export const createSolver = (solver: Solver) => (input: string) => {
  const strings = input.split(' ')
  const lIn = BigInt(strings[0])
  const rIn = BigInt(strings[1])

  const [i, lOut, rOut] = solver(lIn, rIn)

  return `${i} ${lOut} ${rOut}`
}
