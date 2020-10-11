import { createSolver } from './utils'

const classic = createSolver((L, R) => {
  let i = 1
  while (true) {
    if (L < i && R < i) {
      return [i - 1, L, R]
    }

    if (L > R || L === R) {
      L -= i
    } else {
      R -= i
    }

    i += 1
  }
})

export default classic
