function formsubmit(e) {
  const name = e[0].value;
  const place = e[1].value;
  const review = e[2].value;
  const coords = e[3].value;
  
  if (!review || !name || !place) {
    alert('Заполните все поля');
    return false;
  }

  const creationDate = (new Date()).getDate() + '.' + ((new Date()).getMonth() + 1) + '.' + (new Date()).getFullYear();
  
  const reviewsContainer = document.querySelector('#reviews');
  const div = document.createElement('div');
  div.classList.add('review-baloon__review');
  const p1 = document.createElement('p');
  p1.classList.add('review-baloon__review--p');
  const span1 = document.createElement('span');
  span1.classList.add('rb-default-text', 'rb-black-text');
  span1.innerText = name;
  const span2 = document.createElement('span');
  span2.classList.add('rb-default-text', 'rb-gray-text', 'rb-place-date');
  span2.innerText = place + ' ' + creationDate;
  p1.append(span1, span2);
  const p2 = document.createElement('p');
  p2.classList.add('review-baloon__review--p', 'rb-default-text', 'rb-gray-text');
  p2.innerText = review;
  div.append(p1, p2);
  reviewsContainer.append(div);
  
  const oldData = localStorage.getItem('ymap_places')
    ? JSON.parse(localStorage.getItem('ymap_places'))
    : [];

  
  const addToLocalStorage = [];
  for (let i = 0; i < oldData.length; i++) {
    addToLocalStorage.push(oldData[i])
  }
  addToLocalStorage.push({ name, place, review, creationDate, coords })
  localStorage.setItem('ymap_places', JSON.stringify(addToLocalStorage));

  return false;
}

export { formsubmit }