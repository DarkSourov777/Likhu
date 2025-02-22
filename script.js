// Add event listeners to each section
document.querySelectorAll('.section').forEach((section) => {
    section.addEventListener('click', () => {
        // Show the flower
        section.querySelector('.flower').style.display = 'block';
    });
});

// Add event listener to the surprise element
document.querySelector('.surprise-element').addEventListener('click', () => {
    // Show the surprise message
    document.querySelector('.surprise-element p').style.display = 'block';
});
