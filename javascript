let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

function scrollImages(direction) {
  // Calculate the new index
  currentIndex += direction;

  // Loop through the images
  if (currentIndex < 0) {
    currentIndex = totalImages - 1; // Go to the last image
  } else if (currentIndex >= totalImages) {
    currentIndex = 0; // Go to the first image
  }

  // Move the image container based on the new index
  const imageWidth = images[0].clientWidth + 15; // Width of one image + margin
  document.querySelector('.image-container').style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}