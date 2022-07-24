function createReview(name, place, review, creationDate) {
  const div = document.createElement('DIV');
  div.classList.add("review-baloon__review");
  const p1 = document.createElement('P');
  p1.classList.add("review-baloon__review--p");
  const span1 = document.createElement('SPAN');
  span1.classList.add("rb-default-text", "rb-black-text");
  span1.textContent = name;
  const span2 = document.createElement('SPAN');
  span2.classList.add("rb-default-text", "rb-gray-text", "rb-place-date");
  span2.textContent = place + ' ' + creationDate;
  p1.append(span1, span2);
  const p2 = document.createElement('P');
  p2.classList.add("review-baloon__review--p", "rb-default-text", "rb-gray-text");
  p2.textContent = review;
  div.append(p1, p2);
  return div;
}

export { createReview }