import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                // Browser globals
                window: "readonly",
                document: "readonly",
                localStorage: "readonly",
                setTimeout: "readonly",
                clearTimeout: "readonly",
                setInterval: "readonly",
                clearInterval: "readonly",
                requestAnimationFrame: "readonly",
                cancelAnimationFrame: "readonly",
                HTMLDivElement: "readonly",
                URL: "readonly",
                NodeJS: "readonly",
                // React
                React: "readonly",
                JSX: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            "react": reactPlugin,
            "react-hooks": reactHooksPlugin,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "*.config.*",
        ],
    },
];
