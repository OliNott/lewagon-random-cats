const API_KEY = 'QpgRUUKpKz0w06FdToPCQS0O7njhuUYo';
const API_URL = `https://api.giphy.com/v1/gifs/random?tag=cat&api_key=${API_KEY}&limit=1`;

const slider = document.getElementById('slider');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

// This will insert a new GIF in the slider
const insertNewCat = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
      const image = `<img src=${data.data.images.downsized.url} />`;
      slider.insertAdjacentHTML('beforeend', image);
    });
};

const changeSlide = (event) => {
  const direction = Number.parseInt(event.currentTarget.dataset.offset, 10);
  const currentIndex = Number.parseInt(slider.getAttribute('current-slide'), 10);
  const nextIndex = currentIndex + direction;

  const images = slider.querySelectorAll('img');
  images[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  slider.setAttribute('current-slide', nextIndex);
  if (direction > 0) { insertNewCat(); }
};

next.addEventListener('click', changeSlide);
previous.addEventListener('click', changeSlide);
