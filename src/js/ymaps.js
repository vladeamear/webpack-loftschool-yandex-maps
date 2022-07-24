import { formsubmit } from "./formsubmit";
import { createReview } from "./createReview";

function initMap() {
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
      center: [54.187211, 45.183642],
      zoom: 13,
      controls: ["zoomControl"]
    })

    var clusterer = new ymaps.Clusterer({});
    myMap.geoObjects.add(clusterer);

    const form = (coords) => {
      return [
        '<div class="review-baloon__wrapper" id="review-baloon">',
          '<div id="reviews" class="review-baloon__reviews"></div>',
          `<form onsubmit="return ${formsubmit}(this)" class="review-baloon__form">`,
          // `<form onsubmit="return ${formsubmit}" class="review-baloon__form">`,
            '<p class="review-baloon__form--title rb-default-text rb-black-text">Отзыв</p>',
            '<input type="text" name="name" id="name" class="review-baloon__form--input" placeholder="Укажите ваше имя" />',
            '<input type="text" name="place" id="place" class="review-baloon__form--input" placeholder="Укажите место" />',
            '<textarea name="review" id="review" class="review-baloon__form--textarea" placeholder="Оставить отзыв"></textarea>',
            `<input type="hidden" name="coords" id="coords" value="${coords}">`,
            '<input type="submit" class="review-baloon__form--submit" value="Добавить" id="add" />',
          '</form>',
        '</div>'
      ].join('');
    }

    const oldData = localStorage.getItem(`ymap_places`)
      ? JSON.parse(localStorage.getItem(`ymap_places`))
      : undefined;

    if (oldData) {
      oldData.forEach(placemark => {
        const coords = [+placemark.coords.split(',')[0], +placemark.coords.split(',')[1]]
        let newPlacemark = new ymaps.Placemark(coords, {
          hintContent: coords,
          balloonContent: form(coords),
        });
    
        myMap.geoObjects.add(newPlacemark);
        
        clusterer.add(newPlacemark);
      })
    }

    myMap.events.add('click', function (e) {
      var coords = e.get('coords');
  
      var newPlacemark = new ymaps.Placemark(coords, {
        hintContent: coords,
        balloonContent: form(coords),
      });
  
      myMap.geoObjects.add(newPlacemark);
      
      newPlacemark.events.fire('click');
  
      clusterer.add(newPlacemark);
    })
  })
}

export { initMap }