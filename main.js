const path = window.location.hash
switch (path) {
  case '#binary-clock':
    require('./apps/binary-clock')
    break
  case '#analog-clock':
    require('./apps/analog-clock')
    break
  case '#image-carousel':
    require('./apps/image-carousel')
    break
}
