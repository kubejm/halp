module.exports = {
  src: './src',
  schema: '../backend/src/__schema__/schema.gql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'typescript',
  extensions: ['ts', 'tsx'],
  artifactDirectory: './src/__generated__',
};
