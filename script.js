document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let service = document.getElementById('service').value;
    
    let message = `مرحباً Power Land،%0A` +
                  `أريد استشارة VIP:%0A` +
                  `الاسم: ${name}%0A` +
                  `الهاتف: ${phone}%0A` +
                  `الاستفسار عن: ${service}`;
    
    window.open(`https://wa.me/201065652642?text=${message}`, '_blank');
});
