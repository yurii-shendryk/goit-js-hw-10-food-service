import { markup, menu } from './template.js';

const imgRef = document.querySelectorAll('.card__image');
const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;
      image.src = src;
      image.classList.add('appear');
      observer.unobserve(image);
    }
  });
};
const options = {
  rootMargin: '250px',
};
const io = new IntersectionObserver(onEntry, options);
imgRef.forEach(img => io.observe(img));
