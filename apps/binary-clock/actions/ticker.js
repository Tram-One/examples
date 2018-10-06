module.exports = {
  init: () => null,
  startTicking: (ticker, delay, actions) => {
    return setInterval(() => {
      actions.tick()
    }, delay)
  }
}
