# examples

## Development instructions
1. In the root directory, run `npm install` to install all the project dependencies
2. Run `npm start` to start the dev server
3. Navigate to http://localhost:8080 (or the url provided after running `npm start`)

## Development commands
Below are a list of commands used for development. The logic for all the commands is in the local `package.json`
- `npm start` - starts a server hosting the webapp on localhost using
[webpack-dev-server](https://github.com/webpack/webpack-dev-server)
and will watch for changes
- `npm run build` - builds a final distributable using
[webpack](https://webpack.js.org/)
- `npm test` - runs tests in
[jasmine](https://jasmine.github.io/2.0/introduction.html)
