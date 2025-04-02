// Gallery images array
const galleryImages = [
    'img/HMP01116.jpg',
    'img/HMP00546.jpg',
    'img/HMP00709.jpg',
    'img/HMP00867.jpg',
    'img/HMP01158.jpg',
    'img/HMP01324.jpg',
    'img/HMP01384.jpg',
    'img/HMP01457.jpg'
];

// Function to create gallery items
function createGalleryItem(imagePath) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6 wow fadeInUp';
    
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.className = 'img-fluid';
    img.alt = 'Gallery Image';
    img.style.cursor = 'pointer';
    
    galleryItem.appendChild(img);
    col.appendChild(galleryItem);
    
    // Add click event to open modal
    img.addEventListener('click', () => {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modalImg.src = imagePath;
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
    });
    
    return col;
}

// Function to load all images
function loadGalleryImages() {
    const galleryContainer = document.getElementById('gallery-images');
    galleryContainer.innerHTML = ''; // Clear existing content
    
    galleryImages.forEach(imagePath => {
        galleryContainer.appendChild(createGalleryItem(imagePath));
    });
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages();
});

// Function to change the image in the modal
function changeImage(direction) {
    const modalImage = document.getElementById('modalImage');
    const currentSrc = modalImage.src;
    const currentIndex = galleryImages.findIndex(img => img === currentSrc.split('/').pop());
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
        newIndex = galleryImages.length - 1;
    } else if (newIndex >= galleryImages.length) {
        newIndex = 0;
    }
    
    modalImage.src = galleryImages[newIndex];
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