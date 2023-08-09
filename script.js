// Selecting all required elements
const filterItem = document.querySelector('.items');
const filterImg = document.querySelectorAll('.gallery .image');

// When the window is loaded
window.onload = () => {
  // Event handler for when a filter item is clicked
  filterItem.onclick = selectedItem => {
    // Check if the clicked element has the "item" class
    if (selectedItem.target.classList.contains('item')) {
      // Remove "active" class from previously active filter item
      filterItem.querySelector('.active').classList.remove('active');
      // Add "active" class to the clicked filter item
      selectedItem.target.classList.add('active');

      // Get the data-name attribute value of the clicked filter item
      let filterName = selectedItem.target.getAttribute('data-name');

      // Loop through each image
      filterImg.forEach(image => {
        // Get the data-name attribute value of the image
        let filterImages = image.getAttribute('data-name');

        // Check if the clicked filter item matches the image's category or if "all" is selected
        if (filterImages === filterName || filterName === 'all') {
          // Display the image
          image.classList.remove('hide');
          image.classList.add('show');
        } else {
          // Hide the image
          image.classList.add('hide');
          image.classList.remove('show');
        }
      });
    }
  };

  // Attach a click event to each image for preview
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute('onclick', 'preview(this)');
  }
};

// Function for displaying fullscreen image preview
function preview(element) {
  // Disable scrolling on the body
  document.querySelector('body').style.overflow = 'hidden';

  // Get the source link and category name of the clicked image
  let selectedPrevImg = element.querySelector('img').src;
  let selectedImgCategory = element.getAttribute('data-name');

  // Selecting elements for the preview
  const previewBox = document.querySelector('.preview-box');
  const categoryName = previewBox.querySelector('.title p');
  const previewImg = previewBox.querySelector('img');
  const closeIcon = previewBox.querySelector('.icon');
  const shadow = document.querySelector('.shadow');

  // Update the preview image source and category name
  previewImg.src = selectedPrevImg;
  categoryName.textContent = selectedImgCategory;

  // Show the preview box and shadow
  previewBox.classList.add('show');
  shadow.classList.add('show');

  // Event handler for closing the preview
  closeIcon.onclick = () => {
    // Hide the preview box and shadow
    previewBox.classList.remove('show');
    shadow.classList.remove('show');

    // Enable scrolling on the body
    document.querySelector('body').style.overflow = 'auto';
  };
}
