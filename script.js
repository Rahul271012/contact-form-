document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');

    form.addEventListener('submit', function(event) {
        let valid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;

            if (input.value.trim() === '') {
                valid = false;
                input.classList.add('error');
                if (errorMessage) {
                    errorMessage.textContent = 'This field is required.';
                } else {
                    const error = document.createElement('div');
                    error.className = 'error-message';
                    error.textContent = 'This field is required.';
                    input.parentNode.appendChild(error);
                }
            } else {
                input.classList.remove('error');
                if (errorMessage) {
                    errorMessage.textContent = '';
                }
            }
        });

        if (!valid) {
            event.preventDefault();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.classList.contains('error') && input.value.trim() !== '') {
                input.classList.remove('error');
                const errorMessage = input.nextElementSibling;
                if (errorMessage) {
                    errorMessage.textContent = '';
                }
            }
        });
    });
});
