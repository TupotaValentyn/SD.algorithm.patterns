module.exports = {
    extends: ["airbnb-base", "eslint:recommended", "plugin:react/recommended"],
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true
    },
    plugins: ["react"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        // enable additional rules
        indent: [
            "error",
            4,
            {
                SwitchCase: 1
            }
        ],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "no-plusplus": "off",

        "no-cond-assign": ["error", "always"],
        eqeqeq: ["warn", "smart"],
    }
};
