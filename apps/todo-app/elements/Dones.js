const Tram = require('tram-one')

const Done = require('./Done')
const html = Tram.html({
  Done
})

module.exports = (attrs, children) => {
  const renderDone = (done) => {
    return html`
      <Done value=${done}/>
    `
  }

  const doneItems = attrs.dones.map(renderDone)

  return html`
    <div>
      ${doneItems}
    </div>
  `
}
