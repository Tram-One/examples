const Tram = require('tram-one')
const html = Tram.html({
  'digit': require('../elements/digit')
})

module.exports = (attrs) => {
  const {clock} = window.engine.store
  const style = `
    display: flex;
    justify-content: center;
  `
  const timeString = clock.toLocaleTimeString('en-US', {hour12: false}).split(':').join('')
  return html`
    <div style=${style}>
      <digit size="5em" value=${timeString[0]} />
      <digit size="5em" value=${timeString[1]} />
      <div style="width: 1.8em;" />
      <digit size="5em" value=${timeString[2]} />
      <digit size="5em" value=${timeString[3]} />
      <div style="width: 1.8em;" />
      <digit size="5em" value=${timeString[4]} />
      <digit size="5em" value=${timeString[5]} />
    </div>
  `
}

