import globals from 'globals'
import { configs as airbnb, plugins } from 'eslint-config-airbnb-extended'
import tailwindcss from 'eslint-plugin-tailwindcss'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist/', 'node_modules/'],
  },
  plugins.stylistic,
  plugins.importX,
  plugins.react,
  plugins.reactA11y,
  plugins.reactHooks,
  plugins.typescriptEslint,
  ...airbnb.base.recommended,
  ...airbnb.base.typescript,
  ...airbnb.react.recommended,
  ...airbnb.react.typescript,
  tailwindcss.configs.recommended,
  {
    // Type-aware rules need a tsconfig, so they only apply to the files
    // tsconfig.json actually includes.
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // eslint.config.mjs and postcss.config.js are outside that tsconfig.
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
  {
    plugins: { tailwindcss },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      // v4 keeps its theme in CSS rather than tailwind.config.ts.
      tailwindcss: {
        cssConfigPath: 'src/main.css',
      },
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/require-default-props': 'off',
      'tailwindcss/classnames-order': 'warn',
      'import-x/extensions': ['error', 'ignorePackages', {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }],
    },
  },
]
