const Tram = require('tram-one')
require("babel-polyfill")

window.engine = {}
const app = new Tram({
  defaultRoute: '/',
  webEngine: window.engine
})
app.addRoute('/', require('./pages/home'))
app.addActions({
  clock: require('./actions/clock'),
  ticker: require('./actions/ticker')
})

app.start('.main')
