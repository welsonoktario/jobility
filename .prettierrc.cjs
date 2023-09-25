module.exports = {
  singleQuote: true,
  semi: true,
  endOfLine: 'lf',
  printWidth: 100,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn', 'tw'],
  importOrder: [
    '^react',
    '',
    '^@/lib/(.*)$',
    '',
    '^@/pages/(.*)$',
    '',
    '^@/components/(.*)$',
    '',
    '^@/assets/(.*)$',
    '',
    '^[./]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};