const parseInput = (input: string) => {
  const [x, y, moves] = input.split(' ')
  return {
    x: parseInt(x, 10),
    y: parseInt(y, 10),
    moves: moves.split(''),
  }
}

const solver = (input: string) => {
  let { x, y, moves } = parseInput(input)

  const tourLength = moves.length

  let i = 0
  for (const move of moves) {
    i += 1
    switch (move) {
      case 'S':
        y -= 1
        break
      case 'N':
        y += 1
        break
      case 'E':
        x += 1
        break
      case 'W':
        x -= 1
        break
    }
    const distance = Math.abs(x) + Math.abs(y)
    if (distance <= i) {
      return String(i)
    }
  }

  return 'IMPOSSIBLE'
}

export default solver
