function showPicture() {
    let image1 = document.querySelector('.image_1');
    let image2 = document.querySelector('.image_2');

    // Check if images are visible
    if (image1.style.display !== 'none' && image2.style.display !== 'none') {
        // Hide images
        image1.style.display = 'none';
        image2.style.display = 'none';
    } else {
        // Show images
        image1.style.display = 'block';
        image2.style.display = 'block';
    }
}

function showMessage() {
    let message = document.getElementById('message').value;
    alert(message);
}
