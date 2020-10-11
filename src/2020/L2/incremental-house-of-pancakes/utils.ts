export type TransformFn = (i: number) => number
export type HeuristicFn = (i: number) => number

interface FindBestMatchOptions {
  heuristic: HeuristicFn,
  transform: TransformFn,
  target: number,
  maxAttempts?: number,
}

export const findBestMatch = (options: FindBestMatchOptions) => {
  const { heuristic, transform, target, maxAttempts = Infinity } = options

  let lowerBound = null
  let upperBound = null

  let i = heuristic(target)
  let value = transform(i)
  if (value === target) {
    return { i, value, attempts: 0 }
  }

  for (let attempts = 1; attempts <= maxAttempts; attempts += 1) {
    if (value > target) {
      upperBound = i
      i -= 1
    } else if (value < target) {
      lowerBound = i
      i += 1
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
  return (i * (i + 1)) / 2
}

export const revSumAll: HeuristicFn = (n) => {
  return Math.floor(Math.sqrt(n * 2))
}

export const sumOdd: TransformFn = (i) => {
  return i ** 2
}
export const revSumOdd: HeuristicFn = (n) => {
  return Math.floor(Math.sqrt(n))
}

export const sumEven: TransformFn = (i) => {
  return i * (i + 1)
}
export const revSumEven: HeuristicFn = (n) => {
  return Math.floor(Math.sqrt(n))
}

export const countOdd: TransformFn = (n) => {
  return Math.ceil(n / 2)
}

export const countEven: TransformFn = (n) => {
  return Math.floor(n / 2)
}

type Solver = (L: number, R: number) => [number, number, number]

export const createSolver = (solver: Solver) => (input: string) => {
  const strings = input.split(' ')
  const lIn = parseInt(strings[0], 10)
  const rIn = parseInt(strings[1], 10)

  const [i, lOut, rOut] = solver(lIn, rIn)

  return `${i} ${lOut} ${rOut}`
}
