import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const {
    isDev
  } = options

  const cssLoader = buildCssLoader(isDev)

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    typeScriptLoader,
    cssLoader
  ]
}
