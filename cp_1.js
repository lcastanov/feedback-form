
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

