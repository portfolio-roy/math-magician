#!/bin/sh
npx eslint . --fix && npx stylelint "**/*.{css,scss}" --fix --custom-syntax postcss-scss && react-scripts start