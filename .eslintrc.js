module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeature: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    env: {
        browser: true,
    },
    plugins: ["prettier", "@typescript-eslint", "import-helpers", "react", "react-hooks"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "import/prefer-default-export": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "import/extensions": ["error", "never", { ".js": "always", ".jsx": "always", ".json": "always", ".ts": "always", ".tsx": "always" }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/anchor-is-valid": "off",
    },
};
