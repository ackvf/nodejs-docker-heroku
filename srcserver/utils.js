export function printEnv() {
  return JSON.stringify(process.env, (k, v) => {

    if (k === '') return v

    if (!!k.match('(HEROKU_|npm_package_(?!(dev|dep|scripts)))')) return v

    return undefined

  }, ' ')
}
