const Tram = require('tram-one')
const route = Tram.route()
const app = new Tram({
  webStorage: localStorage
})

app.addActions({todos: require('./actions/TodoActions')})
app.addRoute('/', require('./pages/HomePage'), [
  route('/', require('./pages/TodoPage')),
  route('/todo', require('./pages/TodoPage')),
  route('/completed', require('./pages/CompletedPage')),
  route('/results', require('./pages/ResultsPage'))
])

module.exports = app
