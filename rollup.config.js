import builtins from 'builtin-modules'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: builtins,
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
}
