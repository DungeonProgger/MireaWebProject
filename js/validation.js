document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputs = document.querySelectorAll('.border-red-500');
        inputs.forEach(input => input.classList.remove('border-red-500'));
        
        const errors = document.querySelectorAll('.text-red-500');
        errors.forEach(error => error.remove());

        let isValid = true;

        const fullname = document.getElementById('fullname');
        const fullnameValue = fullname.value.trim();
        const nameWords = fullnameValue.split(' ').filter(word => word.length > 0);

        if (fullnameValue === '') {
            showError(fullname, 'Введите ФИО');
            isValid = false;
        } else if (nameWords.length < 2) {
            showError(fullname, 'Введите фамилию и имя (минимум 2 слова)');
            isValid = false;
        }

        const phone = document.getElementById('phone');
        const phoneValue = phone.value.trim();
        const phoneDigits = phoneValue.replace(/\D/g, '');

        if (phoneValue === '') {
            showError(phone, 'Введите номер телефона');
            isValid = false;
        } else if (phoneDigits.length < 10) {
            showError(phone, 'Введите минимум 10 цифр номера');
            isValid = false;
        }

        const email = document.getElementById('email');
        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            showError(email, 'Введите email');
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            showError(email, 'Введите корректный email адрес');
            isValid = false;
        }

        const topic = document.getElementById('topic');
        if (topic.value === '') {
            showError(topic, 'Выберите тему обращения');
            isValid = false;
        }

        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError(message, 'Введите текст сообщения');
            isValid = false;
        }

        const agreement = document.getElementById('agreement');
        if (!agreement.checked) {
            const container = agreement.parentNode; 
            const error = document.createElement('p');
            error.className = 'text-red-500 text-xs mt-1 w-full ml-1';
            error.textContent = 'Необходимо согласие';
            container.parentNode.insertBefore(error, container.nextSibling);
            isValid = false;
        }

        if (isValid) {
            const formData = {
                fullname: fullnameValue,
                phone: phoneValue,
                email: emailValue,
                topic: topic.value,
                message: message.value.trim(),
                date: new Date().toLocaleString()
            };

            const event = new CustomEvent('formValid', { detail: formData });
            document.dispatchEvent(event);

            form.reset();
            alert('Форма успешно отправлена!');
        }
    });

    function showError(input, message) {
        input.classList.add('border-red-500');
        
        const error = document.createElement('p');
        error.className = 'text-red-500 text-xs mt-1';
        error.textContent = message;
        
        input.parentNode.appendChild(error);
    }

    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('border-red-500');
            const parent = this.parentNode;
            const error = parent.querySelector('.text-red-500');
            if (error) error.remove();
        });
    });
});