
// Character Count
document.addEventListener('DOMContentLoaded', () => {
    const commentsBox = document.getElementById('comments');
    const characterCount = document.getElementById('character-count');

    commentsBox.addEventListener('input', (event) => {
        event.preventDefault();
        const currentCount = commentsBox.value.length; // Actually counts each character
        characterCount.textContent = `Character count: ${currentCount}`; // Updates count as you write your comment
    });
})

// Tooltip
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.user-input input, .user-input textarea');

    inputs.forEach(input => {
        const tooltip = input.parentElement.querySelector('.data-tooltip');
        input.addEventListener('mouseover', () =>{
            tooltip.style.display = 'inline-block'
        });
        input.addEventListener('mouseout', () =>{
            tooltip.style.display = 'none'
        });
    });
})


// Preventing submission if field is empty
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const userInput = document.getElementById('user-name');
    const emailInput = document.getElementById('email');
    const commentsInput = document.getElementById('comments');

    const userError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const commentsError = document.getElementById('comments-error');
})