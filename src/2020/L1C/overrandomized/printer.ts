import mem from '../../../lib/mem'

export type CountList = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
]

const generateCounts = (n: number, size: number): CountList[] => {
  if (n <= 0) {
    return new Array(size).fill(null).map(() => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }

  const counts = generateCounts(n - 1, size)
  const digits = n.toString()
  const len = digits.length

  for (let i = 0; i < len; i++) {
    if (i >= digits.length) {
      continue
    }
    const digit = parseInt(digits[i], 10)
    counts[size - len + i][digit] += 1
  }
  return counts
}

const formatCountsAsValues = (counts: CountList): string => {
  return counts.map((x) => x.toString().padStart(2)).join(' ')
}

const formatCountsAsPercentage = (counts: CountList): string => {
  const sum = counts.reduce((sum, digit) => sum + digit, 0)
  return counts
    .map((x) =>
      Math.round((x / sum) * 100)
        .toString()
        .padStart(3),
    )
    .join(' ')
}

const formatCountsAsColor = (counts: CountList): string => {
  const sum = counts.reduce((sum, digit) => sum + digit, 0)
  return counts
    .map((x) => {
      const decimal = sum > 0 ? x / sum : 0
      const color = Math.floor(decimal * 23) + 232
      const text = Math.round(decimal * 100)
        .toString()
        .padStart(4)
      return `\x1b[48;5;${color}m${text}\x1b[0m`
    })
    .join('')
}

const main = () => {
  for (let i = 1; i <= 99; i++) {
    const counts = generateCounts(i, 2)
    // const values = formatCountsAsValues(counts)
    // const values = formatCountsAsPercentage(counts)
    const values = counts.map(formatCountsAsColor).join(' ')
    const index = i.toString().padStart(3)
    console.log(index + ' ' + values)
  }
}

export { generateCounts }

if (module === require.main) {
  main()
}
