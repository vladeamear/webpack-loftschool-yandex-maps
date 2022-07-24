import { initMap } from "./js/ymaps";
import { createReview } from "./js/createReview";

import "./style.css";

window.onload = initMap();

document.addEventListener('click', () => {
  const coords = document.getElementById('coords');
  const reviews = document.getElementById('reviews');
  if (reviews && coords) {
    if (reviews.childNodes.length === 0) {
      
      const oldData = localStorage.getItem(`ymap_places`)
        ? JSON.parse(localStorage.getItem(`ymap_places`))
        : undefined;

      const reviewsInBalloon = oldData.filter(item => item.coords === coords.value)
      
      if (reviewsInBalloon.length > 0) {
        reviewsInBalloon.forEach(item => {
          const div = createReview(item.name, item.place, item.review, item.creationDate);
          reviews.append(div);
        })
      }
    }
  }
})