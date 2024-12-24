import antfu from '@antfu/eslint-config';

export default antfu(
  {
    formatters: true,
    unocss: true,
    typescript: true,
    vue: true,
    ignores: ['.husky'],
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: { max: 1 } }],
      'vue/html-self-closing': ['error', {
        html: { void: 'never', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always',
      }],
    },
  },
  {
    files: ['**/*.md'],
    rules: { 'format/prettier': ['off'] },
  },
  {
    rules: {
      'regexp/no-empty-group': 'off',
      'regexp/no-empty-capturing-group': 'off',
      'style/semi': ['error', 'always'],
      'object-curly-newline': ['error', { multiline: true }],
    },
  },
);
