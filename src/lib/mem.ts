const mem = <I, O>(fn: (arg: I) => O) => {
  const cache = new Map<I, O>()
  return (x: I) => {
    if (cache.has(x)) {
      return cache.get(x)
    }
    const value = fn(x)
    cache.set(x, value)
    return value
  }
}

export default mem
