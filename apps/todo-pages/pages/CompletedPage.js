const Tram = require('tram-one')

const html = Tram.html({
  Dones: require('../elements/Dones'),
})

module.exports = (store) => {
  return html`
    <Dones dones=${store.todos.dones}/>
  `
}
