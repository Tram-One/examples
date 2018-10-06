const Tram = require('tram-one')
const app = new Tram()

const Todos = require('./elements/Todos')
const Dones = require('./elements/Dones')
const NewTodo = require('./elements/NewTodo')

const TodoActions = require('./reducers/TodoActions')

const html = Tram.html({
  NewTodo,
  Todos,
  Dones
})

const home = (store, actions) => {
  const onUpdateInput = ({currentTarget: { value }}) => {
    actions.updateInput(value)
  }

  const onAddTodo = () => {
    actions.addTodo()
  }

  const onCompleteTodo = (index) => () => {
    actions.completeTodo(index)
  }

  return html`
    <div style="max-width: 600px; margin: auto;">
      <h1> Tram-One Todos </h1>
      <NewTodo  value=${store.todos.text}
                onUpdateInput=${onUpdateInput}
                onAddTodo=${onAddTodo}/>
      <Todos todos=${store.todos.todos}
             onCompleteTodo=${onCompleteTodo}/>
      <hr />
      <Dones dones=${store.todos.dones}/>
    </div>
  `
}

app.addActions({todos: TodoActions})
app.addRoute('/', home)

module.exports = app
