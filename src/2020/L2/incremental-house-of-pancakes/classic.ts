import { createSolver } from './utils'

const classic = createSolver((L, R) => {
  let i = BigInt(1)
  while (true) {
    if (L < i && R < i) {
      return [i - BigInt(1), L, R]
    }

    if (L > R || L === R) {
      L -= i
    } else {
      R -= i
    }

    i += BigInt(1)
  }
})

export default classic
