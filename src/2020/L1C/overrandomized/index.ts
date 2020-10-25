const solver = (lines: string[]) => {
  let size: number = null

  const charSet = new Set<string>()
  const minMap = new Map<string, number>()

  const charNotZero = new Set<string>()
  const charCount = new Map<string, number>()

  for (const line of lines) {
    const [mS, r] = line.split(' ')
    const m = parseInt(mS, 10)

    if (r == null && size == null) {
      size = m
      continue
    }

    if (m <= 0) {
      const chars = r.split('')
      chars.forEach((char, index) => {
        if (r.length > 1 && index < size - 1) {
          const count = (charCount.get(char) ?? 0) + 1
          charCount.set(char, count)
        }

        charSet.add(char)

        if (index === 0 && chars.length > 1) {
          charNotZero.add(char)
        }
      })
      continue
    }

    const x = r.padStart(size)

    for (let i = 0; i < size; i++) {
      const c = x[i]
      if (c === ' ') {
        continue
      }

      charSet.add(c)

      if (i === 0 && r.length === size) {
        const minMapValue = minMap.get(c) ?? Infinity
        if (m < minMapValue) {
          minMap.set(c, m)
        }
      }
    }
  }

  for (const c of charSet) {
    if (minMap.has(c) === false) {
      minMap.set(c, 0)
    }
  }

  if (charCount.size > 0) {
    for (const char of charNotZero) {
      charSet.delete(char)
    }
    const zero = [...charSet][0]

    const guesses = [...charCount.entries()]
      .sort((a, b) => {
        return b[1] - a[1]
      })
      .map((a) => {
        return a[0]
      })

    guesses.unshift(zero)

    return guesses.join('')
  } else {
    const guesses = [...minMap.entries()]
      .sort((a, b) => {
        return a[1] - b[1]
      })
      .map((a) => {
        return a[0]
      })
    return guesses.join('')
  }
}

const runner = (allLines: string[]) => {
  const [testCountString, ...allTestLines] = allLines
  const testCount = parseInt(testCountString, 10)

  let remainingTests = allTestLines
  for (let i = 1; i <= testCount; i++) {
    const lines = remainingTests.slice(0, 1000)
    remainingTests = remainingTests.slice(10001)
    console.log(`Case #${i}: ${solver(lines)}`)
  }
}

export default runner
