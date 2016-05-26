## `.eslintrc`

Our `.eslintrc` requires the following NPM packages:

```
npm install --save-dev \
  angielist/javascript \
  babel-eslint \
  eslint \
  eslint-config-airbnb \
  eslint-plugin-import \
  eslint-plugin-jsx-ally \
  eslint-plugin-react
```

Then create an `.eslintrc` file in the root of your project with the following body:
```
{
  "extends": "./node_modules/angieslist-javascript-styleguide/linters/eslint/.eslintrc",
}
```
