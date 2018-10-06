const Tram = require('tram-one')

const html = Tram.html({
  HeaderPage: require('../elements/HeaderPage')
})

module.exports = (store, actions, params, subroute) => {
  return html`
    <div>
      <HeaderPage subtitle="Home Page" />
      ${subroute}
    </div>
  `
}
