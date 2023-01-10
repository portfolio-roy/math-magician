#!/bin/sh
npm run build
cp -r build/* docs/
for fl in docs/static/js/*.js; do  
     sed -i '1s;^;/* eslint-disable */\n;' $fl
     done
for fl in docs/static/css/*.css; do  
     sed -i '1s;^;/* stylelint-disable */\n;' $fl
     done
npx eslint . --fix && npx stylelint "**/*.{css,scss}" --fix --custom-syntax postcss-scss
git add *
read -p 'Commit Message: ' commitMessage
git commit -m "$commitMessage"
read -p 'Branch: ' branchName
git push -u origin $branchName
