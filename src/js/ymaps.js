function initMap() {
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
      center: [55.75, 37.61],
      zoom: 15
    })
  })
}

export {
  initMap
}