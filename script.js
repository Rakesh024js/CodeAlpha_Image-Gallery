const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const buttons = document.querySelectorAll('.filter-btns button');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImg.src = images[index].src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

function filterImages(category, event) {
  images.forEach(img => {
    if (category === 'all' || img.dataset.category === category) {
      img.style.display = "block";
      img.style.opacity = "1";
    } else {
      img.style.display = "none";
      img.style.opacity = "0";
    }
  });
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}
