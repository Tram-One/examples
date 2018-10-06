const urlListener = require('url-listener')

const startApp = () => {
  const path = window.location.hash

  const app = (() => {
    switch (path.split('/')[0]) {
      case '#binary-clock':
        return require('./apps/binary-clock')
      case '#analog-clock':
        return require('./apps/analog-clock')
      case '#image-carousel':
        return require('./apps/image-carousel')
      case '#todo-app':
        return require('./apps/todo-app')
      case '#todo-pages':
        return require('./apps/todo-pages')
    }
  })()

  app.start('.main', '/' + path.split('/').slice(1).join('/'))
}

urlListener(() => {
  // if the hash ever changes, reload the page
  // (we have to reload to clear out any exising actions)
  window.location.reload()
})

startApp()
