document.addEventListener("DOMContentLoaded", function() {

    // 1. التعامل الديناميكي مع تقديم طلبات استمارة حجز الطاولات
    const reservationForm = document.getElementById("cafeReservationForm");
    
    if (reservationForm) {
        reservationForm.addEventListener("submit", function(event) {
            event.preventDefault(); // منع الصفحة الافتراضية من التحديث التلقائي المفاجئ
            
            // قمح جلب البيانات التي قام العميل بتعبئتها
            const clientName = document.getElementById("guestName").value;
            const clientEmail = document.getElementById("guestEmail").value;
            const totalGuests = document.getElementById("guestCount").value;
            
            // إطلاق تنبيه تفاعلي ترحيبي يؤكد اكتمال الحجز باسم العميل
            alert(`Hello ${clientName}! Your table reservation request for ${totalGuests} guests has been successfully logged. We will notify you shortly at: ${clientEmail}.`);
            
            // مسح وتصفير المدخلات من الاستمارة بعد نجاح العملية
            reservationForm.reset();
        });
    }

    // 2. تحديث شريط التنقل العلوي بشكل تفاعلي أثناء حركة وتمرير الصفحة (Active State Navigation)
    const pageSections = document.querySelectorAll("section");
    const navigationLinks = document.querySelectorAll(".nav-menu .nav-item");

    window.addEventListener("scroll", function() {
        let activeSectionId = "";
        const scrollPosition = window.pageYOffset;

        pageSections.forEach(section => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // تحديد القسم الذي يقرأه المستخدم حالياً بناءً على موضع التمرير
            if (scrollPosition >= (sectionOffsetTop - 160)) {
                activeSectionId = section.getAttribute("id");
            }
        });

        navigationLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${activeSectionId}`) {
                link.classList.add("active");
            }
        });
    });
});
