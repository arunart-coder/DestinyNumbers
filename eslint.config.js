import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import firebaseRulesPlugin from '@firebase/eslint-plugin-security-rules';

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "warn",
      "no-useless-escape": "warn",
      "no-useless-assignment": "warn",
    },
  },
  {
    files: ["firestore.rules"],
    ...firebaseRulesPlugin.configs['flat/recommended']
  }
);
