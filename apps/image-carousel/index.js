const Tram = require('tram-one')
const app = new Tram()

const Image = require('./elements/Image')
const ImageDeck = require('./elements/ImageDeck')

const ImageCarouselActions = require('./reducers/ImageCarouselActions')

const html = Tram.html({
  Image,
  ImageDeck
})

const textCenter = `
  text-align : center;
`

// images originally hosted from w3schools
const tiles = [
  '/images/img_nature_wide.jpg',
  '/images/img_fjords_wide.jpg',
  '/images/img_mountains_wide.jpg',
  '/images/img_lights_wide.jpg'
].map(source => `https://github.com/Tram-One/examples/blob/master/apps/image-carousel/${source}?raw=true`)


const home = (store, actions) => {
  const onSelectImage = (index) => () => {
    actions.onSelectImage(index)
  }

  const onPreviousSelect = () => () => {
    actions.onPreviousSelect()
  }

  const onNextImage = () => () => {
    actions.onNextImage()
  }

  const selectedImage = tiles[store.tile]

  return html`
    <div>
      <h1 style=${textCenter}> Tram-One Image Carousel </h1>
      <Image tile=${selectedImage} onNextImage=${onNextImage} onPreviousSelect=${onPreviousSelect} />
      <ImageDeck images=${tiles} onSelect=${onSelectImage} />
    </div>
  `
}

app.addActions({tile: ImageCarouselActions(tiles.length)})
app.addRoute('/', home)

module.exports = app
