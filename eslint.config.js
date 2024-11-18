import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore files and folders
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "detect" } }, // Auto-detect React version
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // JavaScript Recommended Rules
      ...js.configs.recommended.rules,

      // React Recommended Rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      // React Hooks Recommended Rules
      ...reactHooks.configs.recommended.rules,

      // Custom Rules
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off", // Disable prop-types as you might be using TypeScript
      "react/react-in-jsx-scope": "off", // Not needed for React 17+
      "react/jsx-uses-react": "off", // Not needed for React 17+
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": ["warn"],
      "no-console": ["warn"],
    },
  },
];
