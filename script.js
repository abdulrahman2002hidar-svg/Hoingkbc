document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
    const body = document.querySelector('body');
    const htmlTag = document.querySelector('html');

    // قاموس الترجمة لجميع نصوص الموقع الرئيسية والفرعية
    const translations = {
        ar: {
            home: 'الرئيسية',
            courses: 'الدورات',
            about: 'نبذة عنا',
            contact: 'تواصل معنا',
            contact_now: 'تواصل الآن',
            main_slogan: 'طور مهاراتك في اللغة الإنجليزية',
            sub_slogan: 'انضم إلى دوراتنا الشاملة عبر الإنترنت وابدأ رحلة التميز.',
            explore_courses: 'اكتشف الدورات',
            why_us: 'لماذا تختار أونلاين أكاديمي؟',
            feature_online: 'جميع الدورات أونلاين',
            feature_online_desc: 'تعلم من أي مكان وفي أي وقت يناسبك.',
            feature_quality: 'جودة واحترافية',
            feature_quality_desc: 'محتوى تعليمي مصمم بأعلى المعايير العالمية.',
            feature_support: 'دعم فني ومتابعة',
            feature_support_desc: 'فريق جاهز للإجابة على استفساراتك وتقديم المساعدة.',
            call_us: 'اتصل بنا:',
            footer_copyright: '© 2025 أونلاين أكاديمي. جميع الحقوق محفوظة.',
            
            // نصوص صفحة الدورات
            page_courses_title: 'جميع الدورات عبر الإنترنت',
            course_english_general: 'دورات لغة إنجليزية شاملة',
            course_translation: 'دورات ترجمة متخصصة',
            course_speaking: 'دورات المحادثة والتفاعل',
            course_pronunciation: 'دورات النطق والأصوات (Phonetics)',
            course_kids: 'دورات لغة إنجليزية للأطفال',
            course_icdl: 'الرخصة الدولية لقيادة الحاسوب (ICDL)',
            course_desc_general: 'من الصفر إلى الاحتراف في جميع المهارات اللغوية.',
            course_desc_translation: 'تعلم أساليب الترجمة الاحترافية بين العربية والإنجليزية.',
            course_desc_speaking: 'طور طلاقتك وثقتك في التحدث بمواضيع متنوعة.',
            course_desc_pronunciation: 'أتقن مخارج الحروف واللهجات الإنجليزية.',
            course_desc_kids: 'مناهج ممتعة وتفاعلية تناسب الأعمار الصغيرة.',
            course_desc_icdl: 'احصل على الشهادة الدولية لقيادة الحاسوب.',
            
            // نصوص صفحة نبذة عنا
            page_about_title: 'قصتنا ورؤيتنا',
            about_vision_title: 'رؤيتنا',
            about_vision_text: 'أن نكون الأكاديمية الرائدة في تقديم التعليم عالي الجودة عبر الإنترنت في المنطقة.',
            about_mission_title: 'رسالتنا',
            about_mission_text: 'توفير بيئة تعليمية مرنة وشاملة تمكن طلابنا من اكتساب المهارات اللغوية والتقنية اللازمة للنجاح في الحياة المهنية والشخصية.',
            about_team_title: 'فريقنا',
            about_team_text: 'نخبة من المدربين المعتمدين والمؤهلين لضمان أفضل تجربة تعليمية.',

            // نصوص صفحة تواصل معنا
            page_contact_title: 'تواصل معنا',
            contact_desc: 'نحن هنا للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا عبر الطرق التالية:',
            contact_form_title: 'أرسل لنا رسالة سريعة',
            form_name: 'الاسم الكامل',
            form_email: 'البريد الإلكتروني',
            form_message: 'رسالتك',
            form_send: 'إرسال الرسالة',
            contact_or: 'أو تواصل مباشرة:',
        },
        en: {
            home: 'Home',
            courses: 'Courses',
            about: 'About Us',
            contact: 'Contact',
            contact_now: 'Contact Now',
            main_slogan: 'Improve Your English Skills',
            sub_slogan: 'Join our comprehensive online courses and start your journey to excellence.',
            explore_courses: 'Explore Courses',
            why_us: 'Why Choose Online Academy?',
            feature_online: 'All Courses Are Online',
            feature_online_desc: 'Learn from anywhere, at any time that suits you.',
            feature_quality: 'Quality and Professionalism',
            feature_quality_desc: 'Educational content designed with the highest international standards.',
            feature_support: 'Technical Support and Follow-up',
            feature_support_desc: 'A team ready to answer your inquiries and provide assistance.',
            call_us: 'Call Us:',
            footer_copyright: '© 2025 Online Academy. All Rights Reserved.',

            // Courses Page Texts
            page_courses_title: 'All Online Courses',
            course_english_general: 'Comprehensive English Language Courses',
            course_translation: 'Specialized Translation Courses',
            course_speaking: 'Speaking and Interaction Courses',
            course_pronunciation: 'Pronunciation and Phonetics Courses',
            course_kids: 'Kids English Courses',
            course_icdl: 'International Computer Driving License (ICDL)',
            course_desc_general: 'From zero to proficiency in all language skills.',
            course_desc_translation: 'Learn professional translation techniques between Arabic and English.',
            course_desc_speaking: 'Develop your fluency and confidence in speaking on various topics.',
            course_desc_pronunciation: 'Master English sounds and accents.',
            course_desc_kids: 'Fun and interactive curricula suitable for young ages.',
            course_desc_icdl: 'Obtain the International Computer Driving License certification.',

            // About Page Texts
            page_about_title: 'Our Story and Vision',
            about_vision_title: 'Our Vision',
            about_vision_text: 'To be the leading academy in providing high-quality online education in the region.',
            about_mission_title: 'Our Mission',
            about_mission_text: 'To provide a flexible and comprehensive learning environment that enables our students to acquire the linguistic and technical skills necessary for success in personal and professional life.',
            about_team_title: 'Our Team',
            about_team_text: 'An elite group of certified and qualified trainers to ensure the best learning experience.',

            // Contact Page Texts
            page_contact_title: 'Contact Us',
            contact_desc: 'We are here to answer all your inquiries. Feel free to contact us through the following methods:',
            contact_form_title: 'Send us a quick message',
            form_name: 'Full Name',
            form_email: 'Email Address',
            form_message: 'Your Message',
            form_send: 'Send Message',
            contact_or: 'Or contact directly:',
        }
    };

    // وظيفة تطبيق اللغة المحددة
    const setLanguage = (lang) => {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // تغيير اتجاه الصفحة (RTL/LTR)
        body.style.direction = (lang === 'ar') ? 'rtl' : 'ltr';
        body.style.textAlign = (lang === 'ar') ? 'right' : 'left';
        
        // تحديث زر الترجمة ووسم HTML
        if (lang === 'ar') {
            langToggle.textContent = 'English';
            langToggle.setAttribute('data-lang', 'en');
            htmlTag.lang = 'ar';
        } else {
            langToggle.textContent = 'العربية';
            langToggle.setAttribute('data-lang', 'ar');
            htmlTag.lang = 'en';
        }
    };

    // تحميل اللغة الافتراضية
    const defaultLang = 'ar';
    setLanguage(defaultLang);

    // معالج حدث النقر على زر الترجمة
    langToggle.addEventListener('click', () => {
        const currentLang = langToggle.getAttribute('data-lang'); 
        setLanguage(currentLang);
    });
});
          
