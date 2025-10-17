document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const captchaUrl = urlParams.get('url') || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVQYV2NkQAP/Gf4bBjCqAEMAAHQDAh0U8PYAAAAASUVORK5CYII=';
    const captchaImage = document.getElementById('captcha-image');
    const captchaText = document.getElementById('captcha-text');

    captchaImage.src = captchaUrl;

    // Simulate captcha solving
    setTimeout(() => {
        captchaText.innerText = 'Solved Captcha Text';
    }, 15000);
});
