document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const captchaUrl = urlParams.get('url') || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVQYV2NkQAP/Gf4bBjCqAEMAAHQDAh0U8PYAAAAASUVORK5CYII=';
    const captchaImage = document.getElementById('captcha-image');
    const captchaText = document.getElementById('captcha-text');
    const userInput = document.getElementById('user-input');
    const submitButton = document.getElementById('submit-button');
    const fetchCaptchaButton = document.getElementById('fetch-captcha');

    captchaImage.src = captchaUrl;

    // Simulate captcha solving
    setTimeout(() => {
        captchaText.innerText = 'Solved Captcha Text';
    }, 15000);

    fetchCaptchaButton.addEventListener('click', function() {
        captchaImage.src = captchaUrl;
        captchaText.innerText = '';
        userInput.value = '';
    });

    submitButton.addEventListener('click', function() {
        const solvedText = userInput.value;
        captchaText.innerText = solvedText;
    });
});
