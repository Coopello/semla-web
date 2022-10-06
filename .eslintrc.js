module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: [".eslintrc.*", "*.config.*"],
  settings: {
    tailwindcss: {
      groupByResponsive: true,
    },
  },
  plugins: [
    "simple-import-sort",
    "sort-destructure-keys",
    "tailwindcss",
    "import-access",
    "testing-library",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:storybook/recommended",
  ],
  rules: {
    curly: ["error", "multi-line"],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "Don't declare enums",
      },
      {
        selector: "TSInterfaceDeclaration",
        message: "Don't declare interfaces",
      },
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "arrow-body-style": ["error", "as-needed"],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
          },
        ],
      },
    ],
    // react
    "react/display-name": "error",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: false,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["error", "always"],
    // sort
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import-access/jsdoc": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-destructure-keys/sort-destructure-keys": 2,
    // @typescript-eslint
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["typeAlias", "typeParameter"],
        format: ["PascalCase"],
      },
      {
        selector: ["property", "method"],
        format: ["camelCase"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["no", "is", "has", "should"],
        filter: {
          regex: "^_",
          match: false,
        },
      },
    ],
    // jsx-a11y
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: [
        "pages/**/*.tsx",
        "src/**/*.lazy.tsx",
        "src/**/*.stories.tsx",
        "pages/api/**/*.ts",
        "next.config.js",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: [
        "pages/**/*.tsx",
        "src/api/**/*.ts",
        "src/model/**/*.ts",
        "next.config.js",
        "src/type/**/*.d.ts",
      ],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: ["typeAlias", "typeParameter"],
            format: ["PascalCase"],
          },
          {
            selector: ["classProperty", "method"],
            format: ["camelCase"],
          },
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "has", "should"],
          },
        ],
      },
    },
  ],
};
