#!/bin/sh
react-scripts build && npx eslint . --fix && npx stylelint "**/*.{css,scss}" --fix
cp -rv ./build/* ./docs
git add *
read -p 'Commit Message: ' commitMessage
git commit -m "$commitMessage"
read -p 'Branch: ' branchName
git push -u origin $branchName
