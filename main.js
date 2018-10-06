const urlListener = require('url-listener')
const appNames = [
  'binary-clock', 'analog-clock', 'image-carousel',
  'todo-app', 'todo-pages'
]
const path = window.location.hash

const app = (() => {
  // if we have a correct app name in the hash, load it
  const appFromHash = path.split('/')[0].slice(1)
  if (appNames.includes(appFromHash)) {
    return require(`./apps/${appFromHash}`)
  }
  // build a quick app that displays all the apps
  const Tram = require('tram-one')
  const html = Tram.html()
  const home = () => {
    const appLinks = appNames.map(
      name => html`<div><a href="/examples#${name}">${name}</a></div>`
    )
    return html`
      <div style="max-width: 600px; margin: auto;">
        <h1>Tram-One Examples</h1>
        <div>Welcome! This page hosts example Tram-One apps!</div>
        <div><a href="https://github.com/Tram-One/examples">You can contribute by going over to the repo on github.</a></div>
        <br />
        If you have any questions about Tram-One, <br/> checkout the website at <a href="http://tram-one.io/">tram-one.io</a>
        or <a href="https://join.slack.com/t/tram-one/shared_invite/enQtMjY0NDA3OTg2MzQyLWUyMGIyZTYwNzZkNDJiNWNmNzdiOTMzYjg0YzMzZTkzZDE4MTlmN2Q2YjE0NDIwMGI3ODEzYzQ4ODdlMzQ2ODM">
        visit our slack</a>!
        <br /><br />
        To see some of the examples here, just click on a link below!
        ${appLinks}
        <br /><br />
        <div><a href="https://github.com/Tram-One/examples">We have more examples on the repo, so be sure to check it out!</a></div>
      </div>
    `
  }
  const app = new Tram({defaultRoute: '/'})
  app.addRoute('/', home)
  app.start('.main')
})()

app.start('.main', '/' + path.split('/').slice(1).join('/'))

urlListener(() => {
  // if the hash ever changes, reload the page
  // (we have to reload to clear out any exising actions)
  window.location.reload()
})
