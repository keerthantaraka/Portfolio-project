document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.your-button-class'); // Update this with the actual class or ID of your button
    if (button) {
        button.addEventListener('click', () => {
            console.log('Button clicked!');
        });
    } else {
        console.error('Button element not found');
    }
});
