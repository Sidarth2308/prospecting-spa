module.exports = {
  ...require('gts/.prettierrc.json'),
  endOfLine: 'lf',
  semi: true,
  arrowParens: 'always',
  insertPragma: false, // Conflicts with TSDoc Linter
}
