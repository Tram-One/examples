const Tram = require('tram-one')

const html = Tram.html({
  NavRoutes: require('./NavRoutes')
})

const headerStyle = `
  text-align: center;
`

module.exports = ({title}, children) => {
  return html`
    <div style=${headerStyle}>
      <h1> Todos </h1>
      <NavRoutes />
      <hr />
    </div>
  `
}
