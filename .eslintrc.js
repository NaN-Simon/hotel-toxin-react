module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
        "jsx-a11y/label-has-for": "off",
        "react/jsx-props-no-spreading": "off",
        "linebreak-style": ["error", "windows"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".ts", ".jsx", ".tsx"] }],
        "max-len": ["error", {
            "code": 120,
            "ignorePattern": 'd="([\\s\\S]*?)"'
        }],
        "no-unused-vars": ["error", { "args": "none" }], //temp
        "react/no-array-index-key": 0, //temp
        "global-require": 0,
        "no-param-reassign": ["error", { "props": false }],
        "react/default-props-match-prop-types": ["error", { "allowRequiredDefaults": true }],
        "spaced-comment": ["error", "never", { "block": { "markers": ["/"] } }],
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "no-plusplus": 0,
        "no-shadow": "off",
        "no-console": "off",
        "dot-notation": "off",
        "no-unused-expressions": 0,
        "jsx-a11y/label-has-associated-control": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
    }
}
