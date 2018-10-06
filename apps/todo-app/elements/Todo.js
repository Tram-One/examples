const Tram = require('tram-one')

const html = Tram.html()

module.exports = (attrs, children) => {
  return html`
    <div>
      <input type='checkbox' onchange=${attrs.onComplete} />
      <span onclick=${attrs.onComplete}>
        ${attrs.value}
      </span>
    </div>
  `
}
