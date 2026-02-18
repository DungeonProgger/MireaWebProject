document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const formData = event.detail;

        console.clear();
        console.group('Новая заявка с сайта');
        console.log(`%cФИО: %c${formData.fullname}`, 'font-weight: bold; color: #2C3E50', 'color: black');
        console.log(`%cТелефон: %c${formData.phone}`, 'font-weight: bold; color: #2C3E50', 'color: black');
        console.log(`%cEmail: %c${formData.email}`, 'font-weight: bold; color: #2C3E50', 'color: black');
        console.log(`%cТема: %c${formData.topic}`, 'font-weight: bold; color: #2C3E50', 'color: black');
        console.log(`%cСообщение:`, 'font-weight: bold; color: #2C3E50');
        console.log(formData.message);
        console.log(`%cВремя отправки: %c${formData.date}`, 'color: gray', 'color: gray');
        console.groupEnd();
    });
});