document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    
    const message = `مرحباً Power Land، أنا المهتم بالاستشارة الـ VIP:
- الاسم: ${name}
- الهاتف: ${phone}
- نوع الخدمة: ${service}
أريد استشارة احترافية بخصوص هذا الأمر.`;

    const whatsappUrl = `https://wa.me/201065652642?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});
