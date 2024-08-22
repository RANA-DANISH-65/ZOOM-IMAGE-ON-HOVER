// Select the image container and image elements from the DOM
const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('.zoom-image');

// Add an event listener to the image container to handle mouse movement
imageContainer.addEventListener('mousemove', (e) => {
    // Get the bounding rectangle of the image container
    const rect = imageContainer.getBoundingClientRect();
    
    // Calculate the mouse position relative to the image container
    const x = e.clientX - rect.left; // Mouse X position relative to the left edge of the container
    const y = e.clientY - rect.top;  // Mouse Y position relative to the top edge of the container
    
    // Calculate the percentage position of the mouse within the container
    const moveX = (x / rect.width) * 100; // Percentage of the mouse position relative to the container's width
    const moveY = (y / rect.height) * 100; // Percentage of the mouse position relative to the container's height
    
    // Set the transform origin of the image based on the mouse position percentage
    // This will make the zoom effect centered around the mouse pointer
    image.style.transformOrigin = `${moveX}% ${moveY}%`;
    
    // Apply zoom effect to the image by scaling it up by 1.5 times
    image.style.transform = 'scale(1.5)';
});

// Add an event listener to the image container to handle when the mouse leaves the container
imageContainer.addEventListener('mouseleave', () => {
    // Reset the image scale to its original size when the mouse leaves the container
    image.style.transform = 'scale(1)';
});
