let imagePaths = [
  "../img/biene.jpg",
  "../img/butterfly-front.jpg",
  "../img/wildflowers.jpg",
  "../img/peach-blossoms-.jpg",
  "../img/ladybug.jpg",
  "../img/moskito.jpg",
  "../img/shroom.jpg",
  "../img/jumping-spider.jpg",
  "../img/spider.jpg",
  "../img/flower-water.jpg",
  "../img/flower-one.jpg",
  "../img/frog.jpg",
  "../img/fantasy-4652501_640.jpg",
  "../img/waterdrop.jpg",
  "../img/dragonfly.jpg",
];

let index = 0;

let currentIndex = 0;

function displayImages() {
  let albumContainer = document.getElementById("albumDisplay");
  for (let i = 0; i < imagePaths.length; i++) {
    albumContainer.innerHTML += createImageTemplate(i);
  }
}

function createImageTemplate(index) {
  return `<div id="albumDisplay" class="photo-album">  
          <div onclick="toggleImageOverlay(${index})">
            <img class="photo-album-image" src="${imagePaths[index]}"></div>`;
}

function toggleImageOverlay(index) {
  document.getElementById("imageOverlay").classList.toggle("hidden");
  renderImageTamplate(index);
}

function renderImageTamplate(index) {
  let imageDisplay = document.getElementById("imageViewer");
  currentIndex = index;
  imageDisplay.innerHTML = `<div class="image-viewer-header">
    </div>
  </div>
  <div class="imageOverlayPosition">
    <img id="imageBox" class="image-box" src="${imagePaths[index]}">
  </div>
  <div class="image-viewer-footer">
    <button onclick="navigatePreviousImage(${currentIndex}, event)" class="navigation-arrow-left">
    <img class="navigation-arrow-left"src="../img/left-arrow.png" alt="navigation_left">
  </button>
    <span id="imageCounter">${currentIndex + 1}</span><span> / </span><span>${
    imagePaths.length
  }</span>
    <button onclick="navigateNextImage(${currentIndex}, event)" class="navigation-arrow-right">
    <img class="navigation-arrow-right" src="../img/right-arrow.png" alt="navigation_left"></button>
  </div>`;
}

function navigatePreviousImage(currentIndex, event) {
  event.stopPropagation();
  let index = currentIndex - 1;
  if (index < 0) {
    index = imagePaths.length - 1;
  }
  renderImageTamplate(index);
}

function navigateNextImage(currentIndex, event) {
  event.stopPropagation();
  let index = currentIndex + 1;
  if (index >= imagePaths.length) {
    index = 0;
  }
  renderImageTamplate(index);
}
