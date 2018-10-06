const Tram = require('tram-one')
const html = Tram.html({
  'clock': require('../components/clock')
})

module.exports = (store, actions) => {
  if (store.ticker === null) {
    actions.startTicking(300)
  }
  return html`
    <div>
      <clock />
    </div>
  `
}
