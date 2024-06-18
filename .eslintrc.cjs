module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    indent: ['error', 2],
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0
  }
}
