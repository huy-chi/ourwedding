const images = [
    /*'img/HMP00407.jpg', 'img/HMP00468.jpg',
    'img/HMP00482.jpg', 'img/HMP00499.jpg', */'img/HMP00542.jpg',
    'img/HMP00546.jpg', 'img/HMP00639.jpg', /* 'img/HMP00645.jpg', */ 'img/HMP00651.jpg',
    'img/HMP00659.jpg', 'img/HMP00670.jpg', 'img/HMP00676.jpg', 'img/HMP00693.jpg',
    'img/HMP00709.jpg', /*'img/HMP00713.jpg', */ 
    'img/HMP00757.jpg', 'img/HMP00771.jpg',
    'img/HMP00863.jpg', 'img/HMP00865.jpg', 'img/HMP00867.jpg',
    'img/HMP00880.jpg', 'img/HMP00928.jpg',
    /* 'img/HMP01009.jpg', */ 'img/HMP01026.jpg', 'img/HMP01101.jpg',
    'img/HMP01111.jpg', 'img/HMP01116.jpg', 'img/HMP01131.jpg',
    'img/HMP01144.jpg', 'img/HMP01158.jpg', 'img/HMP01224.jpg', 'img/HMP01301.jpg',
    'img/HMP01324.jpg', 'img/HMP01348.jpg', 'img/HMP01384.jpg', 'img/HMP01424.jpg',
    /*'img/HMP01429.jpg',*/ 'img/HMP01457.jpg', /*'img/HMP01550.jpg',
    'img/HMP01553.jpg' */
];

const imagesPerPage = 8;
const totalPages = Math.ceil(images.length / imagesPerPage);

// Preload images
function preloadImages() {
    images.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc; // This will preload the image
    });
}

// Function to display images for a given page
function displayImages(page) {
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const imagesToShow = images.slice(startIndex, endIndex);

    const galleryImages = document.getElementById('gallery-images');
    galleryImages.innerHTML = ''; // Clear previous images

    imagesToShow.forEach(imageSrc => {
        const col = document.createElement('div');
        col.classList.add('col-md-6', 'col-lg-4', 'col-xl-3', 'gallery-item');
        col.innerHTML = `
            <div class="gallery-img">
                <img class="img-fluid w-100 rounded-image" src="${imageSrc}" alt="Image">
            </div>
        `;
        galleryImages.appendChild(col);
    });
}

// Function to create pagination buttons
function createPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear previous pagination buttons

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('btn', 'btn-outline-primary', 'm-1');
        if (i === 1) button.classList.add('active'); // Set first page as active

        button.addEventListener('click', () => {
            displayImages(i);
            setActivePage(i);
        });

        pagination.appendChild(button);
    }
}

// Function to set the active page button
function setActivePage(page) {
    const buttons = document.querySelectorAll('#pagination button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[page - 1].classList.add('active');
}

// Initialize gallery and pagination
function init() {
    preloadImages(); // Preload all images
    displayImages(1); // Show first page of images
    createPagination(); // Create pagination buttons
}

// Run the initialization function
init();

let currentImageIndex = 0;

// Open modal and display the clicked image
document.querySelectorAll('.gallery-img img').forEach((img, index) => {
img.addEventListener('click', () => {
    currentImageIndex = index;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
});
});

// Function to change the image in the modal
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

// Next and previous buttons functionality
document.getElementById('nextBtn').addEventListener('click', () => {
    changeImage(1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    changeImage(-1);
});

// Keyboard navigation using left and right arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
            changeImage(1); // Go to next image
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1); // Go to previous image
        }
    });