import fs from 'fs'

type JamFn = (input: string) => string

const jam = (fn: JamFn) => {
  const input = fs.readFileSync(0, 'utf8').trim().split('\n').slice(1)

  console.log(input.map((e, i) => `Case #${i + 1}: ${fn(e)}`).join('\n'))
}

export default jam
