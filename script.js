// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('testForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity()) {
            const formData = new FormData(form);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 201) {
                        responseMessage.textContent = 'Форма успешно отправлена!';
                        responseMessage.style.color = 'green';
                    } else {
                        responseMessage.textContent = 'Произошла ошибка при отправке формы.';
                        responseMessage.style.color = 'red';
                    }
                }
            };

            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            const json = JSON.stringify(object);

            xhr.send(json);
        } else {
            responseMessage.textContent = 'Пожалуйста, заполните все обязательные поля правильно.';
            responseMessage.style.color = 'red';
        }
    });
});
