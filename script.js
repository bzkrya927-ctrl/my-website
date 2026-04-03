document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'en';
    let configData = null;
    let typingTimeout = null;

    // Set initial direction
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');

    // Initialize AOS safely
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Configuration data embedded directly to avoid CORS issues when opening from file system
    configData = {
  "en": {
    "personal": {
      "fullName": "Abdelrahman Zakaria Yahya",
      "professionalTitle": "Junior Accountant",
      "location": "Sharqia, Egypt",
      "phone": "+20 155 521 1201",
      "email": "bzakarya927@gmail.com",
      "linkedin": "https://linkedin.com/in/abdelrahman-zakaria-18ba69236",
      "cvDownloadUrl": "./Abdelrahman_Zakaria_CV (1).pdf",
      "heroHeadline": "Junior Accountant",
      "heroIntroduction": "Motivated accounting graduate with a strong foundation in financial reporting, financial analysis, and auditing principles. Passionate about applying analytical skills and accounting knowledge to support business decisions and financial accuracy.",
      "profileImage": "photo1.jpeg"
    },
    "nav": {
      "home": "Home",
      "about": "About",
      "education": "Education",
      "experience": "Experience",
      "projects": "Projects",
      "contact": "Contact",
      "lang": "العربية"
    },
    "about": {
      "title": "About Me",
      "paragraphs": [
        "Accounting graduate from Zagazig University (English Section) with academic and practical experience in financial analysis, retail operations, and data entry. Skilled in handling financial transactions, analyzing financial statements, and working with accounting principles.",
        "Experienced in customer service, POS systems, and inventory data management. Highly motivated to begin a professional career in accounting where I can apply my knowledge and grow within a dynamic organization."
      ]
    },
    "education": {
      "title": "Education",
      "items": [
        {
          "institution": "Zagazig University",
          "degree": "Bachelor of Accounting – English Section (Credit Hours Program)",
          "graduationDate": "July 2025",
          "major": "Accounting",
          "grade": "Good",
          "relevantCourses": ["Financial Accounting", "Cost Accounting", "Financial Analysis", "Auditing"]
        }
      ]
    },
    "experience": {
      "title": "Work Experience",
      "items": [
        {
          "role": "Accountant",
          "company": "Riviera Life Center - Sheikh Zayed",
          "duration": "2025",
          "responsibilities": [
            "Managed financial transactions and maintained accurate financial records",
            "Prepared financial statements and reports",
            "Handled accounts payable and receivable",
            "Assisted in budget preparation and financial planning",
            "Ensured compliance with accounting principles and regulations"
          ]
        },
        {
          "role": "Cashier & Product Data Entry Clerk",
          "company": "Khair Zaman Hypermarket – Sharqia",
          "duration": "February 2025",
          "responsibilities": [
            "Processed sales transactions using POS systems",
            "Reconciled daily financial transactions",
            "Entered and updated more than 1000 products in the inventory system",
            "Maintained 98% data accuracy",
            "Provided efficient customer service"
          ]
        },
        {
          "role": "Fitness Trainer",
          "company": "High Gym – Sharqia",
          "duration": "2023",
          "responsibilities": [
            "Designed personalized training programs",
            "Monitored client progress",
            "Ensured safe workout techniques",
            "Built strong client relationships"
          ]
        }
      ]
    },
    "projects": {
      "title": "Academic Projects",
      "items": [
        {
          "name": "Financial Statement Analysis Project",
          "description": "Analyzed financial statements of a real company, applied ratio and trend analysis, and presented recommendations in a formal report."
        },
        {
          "name": "Cost Allocation Case Study",
          "description": "Simulated costing for a manufacturing process, applied CVP analysis, and used job-order costing to estimate profit margins."
        }
      ]
    },
    "skills": {
      "title": "Core Skills",
      "items": [
        {"name": "Financial Analysis", "level": 85},
        {"name": "Financial Reporting", "level": 80},
        {"name": "Accounting Principles", "level": 90},
        {"name": "Microsoft Excel", "level": 95},
        {"name": "Data Entry", "level": 98},
        {"name": "Inventory Management", "level": 85}
      ]
    },
    "languages": {
      "title": "Languages",
      "items": [
        {"name": "Arabic", "level": "Native"},
        {"name": "English", "level": "Professional (English Section Graduate)"}
      ]
    },
    "certifications": {
      "title": "Certifications",
      "items": [
        "ICDL Certificate – EduHub (2022)",
        "Banque Misr Online Training – Introduction to Banking Operations (2022)",
        "Digital Marketing Challenger Track – Ministry of Communications (2022)",
        "Entrepreneurship Training Program"
      ]
    },
    "contact": {
      "title": "Contact Me",
      "email": "Email",
      "phone": "Phone",
      "location": "Location",
      "linkedin": "LinkedIn",
      "connect": "Connect on LinkedIn",
      "namePlaceholder": "Your Name",
      "emailPlaceholder": "Your Email",
      "messagePlaceholder": "Your Message",
      "sendBtn": "Send Message"
    }
  },
  "ar": {
    "personal": {
      "fullName": "عبدالرحمن زكريا يحيى",
      "professionalTitle": "محاسب مبتدئ",
      "location": "الشرقية، مصر",
      "phone": "+20 155 521 1201",
      "email": "bzakarya927@gmail.com",
      "linkedin": "https://linkedin.com/in/abdelrahman-zakaria-18ba69236",
      "cvDownloadUrl": "./Abdelrahman_Zakaria_CV (1).pdf",
      "heroHeadline": "محاسب مبتدئ",
      "heroIntroduction": "خريج محاسبة طموح لديه أساس قوي في التقارير المالية والتحليل المالي ومبادئ المراجعة. شغوف بتطبيق المهارات التحليلية والمعرفة المحاسبية لدعم القرارات التجارية ودقة البيانات المالية.",
      "profileImage": "photo.jpeg"
    },
    "nav": {
      "home": "الرئيسية",
      "about": "عني",
      "education": "التعليم",
      "experience": "الخبرة",
      "projects": "المشاريع",
      "contact": "اتصل بي",
      "lang": "English"
    },
    "about": {
      "title": "نبذة عني",
      "paragraphs": [
        "خريج محاسبة من جامعة الزقازيق (قسم إنجليزي) بخبرة أكاديمية وعملية في التحليل المالي وعمليات التجزئة وإدخال البيانات. ماهر في التعامل مع المعاملات المالية، وتحليل القوائم المالية، والعمل بالمبادئ المحاسبية.",
        "خبير في خدمة العملاء، وأنظمة POS، وإدارة بيانات المخزون. متحمس للغاية لبدء مسيرة مهنية احترافية في المحاسبة حيث يمكنني تطبيق معرفتي والنمو داخل منظمة ديناميكية."
      ]
    },
    "education": {
      "title": "التعليم",
      "items": [
        {
          "institution": "جامعة الزقازيق",
          "degree": "بكالوريوس التجارة - قسم المحاسبة (شعبة اللغة الإنجليزية) - نظام الساعات المعتمدة",
          "graduationDate": "يوليو 2025",
          "major": "المحاسبة",
          "grade": "جيد",
          "relevantCourses": ["المحاسبة المالية", "محاسبة التكاليف", "التحليل المالي", "المراجعة"]
        }
      ]
    },
    "experience": {
      "title": "الخبرة العملية",
      "items": [
        {
          "role": "محاسب",
          "company": "Riviera Life Center - الشيخ زايد",
          "duration": "2025",
          "responsibilities": [
            "إدارة المعاملات المالية والحفاظ على السجلات المالية الدقيقة",
            "إعداد القوائم والتقارير المالية",
            "إدارة الحسابات الدائنة والمدينة",
            "المساعدة في إعداد الميزانية والتخطيط المالي",
            "ضمان الامتثال للمبادئ واللوائح المحاسبية"
          ]
        },
        {
          "role": "كاشير وموظف إدخال بيانات المنتجات",
          "company": "هايبر ماركت خير زمان - الشرقية",
          "duration": "فبراير 2025",
          "responsibilities": [
            "معالجة معاملات المبيعات باستخدام أنظمة POS",
            "تسوية المعاملات المالية اليومية",
            "إدخال وتحديث أكثر من 1000 منتج في نظام المخزون",
            "الحفاظ على دقة البيانات بنسبة 98%",
            "تقديم خدمة عملاء فعالة"
          ]
        },
        {
          "role": "مدرب لياقة بدنية",
          "company": "هاي جيم - الشرقية",
          "duration": "2023",
          "responsibilities": [
            "تصميم برامج تدريبية مخصصة",
            "مراقبة تقدم العملاء",
            "ضمان تقنيات التمرين الآمنة",
            "بناء علاقات قوية مع العملاء"
          ]
        }
      ]
    },
    "projects": {
      "title": "المشاريع الأكاديمية",
      "items": [
        {
          "name": "مشروع تحليل القوائم المالية",
          "description": "تحليل القوائم المالية لشركة حقيقية، وتطبيق تحليل النسب والتحليل الاتجاهي، وتقديم التوصيات في تقرير رسمي."
        },
        {
          "name": "دراسة حالة تخصيص التكاليف",
          "description": "محاكاة التكاليف لعملية تصنيع، وتطبيق تحليل CVP، واستخدام تكلفة أوامر العمل لتقدير هوامش الربح."
        }
      ]
    },
    "skills": {
      "title": "المهارات الأساسية",
      "items": [
        {"name": "التحليل المالي", "level": 85},
        {"name": "التقارير المالية", "level": 80},
        {"name": "المبادئ المحاسبية", "level": 90},
        {"name": "مايكروسوفت إكسل", "level": 95},
        {"name": "إدخال البيانات", "level": 98},
        {"name": "إدارة المخزون", "level": 85}
      ]
    },
    "languages": {
      "title": "اللغات",
      "items": [
        {"name": "العربية", "level": "اللغة الأم"},
        {"name": "الإنجليزية", "level": "احترافي (خريج قسم إنجليزي)"}
      ]
    },
    "certifications": {
      "title": "الشهادات",
      "items": [
        "شهادة ICDL – EduHub (2022)",
        "تدريب بنك مصر أونلاين – مقدمة في العمليات المصرفية (2022)",
        "مسار تحدي التسويق الرقمي – وزارة الاتصالات (2022)",
        "برنامج تدريب ريادة الأعمال"
      ]
    },
    "contact": {
      "title": "اتصل بي",
      "email": "البريد الإلكتروني",
      "phone": "الهاتف",
      "location": "الموقع",
      "linkedin": "لينكد إن",
      "connect": "تواصل عبر لينكد إن",
      "namePlaceholder": "اسمك",
      "emailPlaceholder": "بريدك الإلكتروني",
      "messagePlaceholder": "رسالتك",
      "sendBtn": "إرسال الرسالة"
    }
  },
  "contact": {
    "emailjs": {
      "serviceId": "YOUR_SERVICE_ID",
      "templateId": "YOUR_TEMPLATE_ID",
      "publicKey": "YOUR_PUBLIC_KEY"
    }
  }
};
    populateContent();
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 300);

    // Language Toggle
    const langBtn = document.getElementById('lang-toggle');
    langBtn.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        document.body.className = currentLang;
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', currentLang);
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        populateContent();
        // Refresh icons after language change
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 100);
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.setAttribute('data-lucide', 'sun');
        } else {
            icon.setAttribute('data-lucide', 'moon');
        }
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });

    // Back to Top functionality
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // Header scroll effect
        const header = document.querySelector('header');
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            if (isDarkMode) {
                header.style.background = 'rgba(30, 41, 59, 0.98)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }
        } else {
            header.style.padding = '1rem 0';
            if (isDarkMode) {
                header.style.background = 'rgba(30, 41, 59, 0.9)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.9)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth Scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        const isVisible = navLinks.style.display === 'flex';
        const isDarkMode = document.body.classList.contains('dark-mode');
        navLinks.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible) {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = isDarkMode ? 'rgba(30, 41, 59, 0.98)' : 'white';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
        }
    });

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                navLinks.style.display = 'none';
            }
        });
    });

    // Typewriter effect
    function typeWriter(element, text, speed) {
        if (typingTimeout) clearTimeout(typingTimeout);
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                typingTimeout = setTimeout(type, speed);
            } else {
                typingTimeout = setTimeout(() => {
                    deleteText(element, text, speed);
                }, 2000);
            }
        }

        type();
    }

    function deleteText(element, text, speed) {
        let i = text.length;

        function deleteChar() {
            if (i > 0) {
                element.innerHTML = text.substring(0, i - 1);
                i--;
                typingTimeout = setTimeout(deleteChar, speed / 2);
            } else {
                typingTimeout = setTimeout(() => {
                    typeWriter(element, text, speed);
                }, 500);
            }
        }

        deleteChar();
    }

    // Populate Content Function
    function populateContent() {
        const lang = configData[currentLang];
        const shared = configData;

        // Nav
        const navElements = document.querySelectorAll('[data-key^="nav."]');
        navElements.forEach(el => {
            const key = el.getAttribute('data-key').split('.')[1];
            if (lang.nav && lang.nav[key]) {
                el.textContent = lang.nav[key];
            }
        });

        // Hero Section
        const profileImg = document.getElementById('profile-img');
        if (profileImg) profileImg.src = lang.personal.profileImage;
        const heroName = document.getElementById('hero-name');
        if (heroName) heroName.textContent = lang.personal.fullName;
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) {
            heroTitle.textContent = '';
            typeWriter(heroTitle, lang.personal.heroHeadline, 50);
        }

        const heroIntro = document.getElementById('hero-intro');
        if (heroIntro) heroIntro.textContent = lang.personal.heroIntroduction;
        const cvBtn = document.getElementById('cv-btn');
        if (cvBtn) {
            cvBtn.href = lang.personal.cvDownloadUrl;
            cvBtn.target = '_blank';
            cvBtn.innerHTML = currentLang === 'en' ? 'Download CV <i data-lucide="download"></i>' : 'تحميل السيرة الذاتية <i data-lucide="download"></i>';
        }

        // About Section
        const aboutTitle = document.getElementById('about-title');
        if (aboutTitle) aboutTitle.textContent = lang.about.title;
        const aboutContent = document.getElementById('about-content');
        if (aboutContent) {
            aboutContent.innerHTML = '';
            lang.about.paragraphs.forEach(p => {
                const para = document.createElement('p');
                para.textContent = p;
                aboutContent.appendChild(para);
            });
        }

        // Detailed Skills Section
        const skillsTitle = document.getElementById('skills-title');
        if (skillsTitle) skillsTitle.textContent = lang.skills.title;
        const skillsList = document.getElementById('skills-list');
        if (skillsList) {
            skillsList.innerHTML = '';
            lang.skills.items.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.innerHTML = `
                    <div class="skill-info">
                        <span>${skill.name}</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                `;
                skillsList.appendChild(skillItem);
            });
        }

        // Languages Section
        const languagesTitle = document.getElementById('languages-title');
        if (languagesTitle) languagesTitle.textContent = lang.languages.title;
        const languagesList = document.getElementById('languages-list');
        if (languagesList) {
            languagesList.innerHTML = '';
            lang.languages.items.forEach(langItem => {
                const langCard = document.createElement('div');
                langCard.className = 'lang-card';
                langCard.innerHTML = `
                    <h3>${langItem.name}</h3>
                    <p>${langItem.level}</p>
                `;
                languagesList.appendChild(langCard);
            });
        }

        // Education Section
        const educationTitle = document.getElementById('education-title');
        if (educationTitle) educationTitle.textContent = lang.education.title;
        const eduList = document.getElementById('education-list');
        if (eduList) {
            eduList.innerHTML = '';
            lang.education.items.forEach(edu => {
                const eduItem = document.createElement('div');
                eduItem.className = 'timeline-item';
                eduItem.innerHTML = `
                    <h3>${edu.degree}</h3>
                    <div class="company">${edu.institution}</div>
                    <div class="duration">${edu.graduationDate}</div>
                    <p><strong>${currentLang === 'en' ? 'Major' : 'التخصص'}:</strong> ${edu.major} | <strong>${currentLang === 'en' ? 'Grade' : 'التقدير'}:</strong> ${edu.grade}</p>
                    <p><strong>${currentLang === 'en' ? 'Relevant Courses' : 'المقررات ذات الصلة'}:</strong> ${edu.relevantCourses.join(', ')}</p>
                `;
                eduList.appendChild(eduItem);
            });
        }

        // Experience Section
        const experienceTitle = document.getElementById('experience-title');
        if (experienceTitle) experienceTitle.textContent = lang.experience.title;
        const expList = document.getElementById('experience-list');
        if (expList) {
            expList.innerHTML = '';
            lang.experience.items.forEach(exp => {
                const expItem = document.createElement('div');
                expItem.className = 'timeline-item';
                expItem.innerHTML = `
                    <h3>${exp.role}</h3>
                    <div class="company">${exp.company}</div>
                    <div class="duration">${exp.duration}</div>
                    <ul>
                        ${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}
                    </ul>
                `;
                expList.appendChild(expItem);
            });
        }

        // Projects Section
        const projectsTitle = document.getElementById('projects-title');
        if (projectsTitle) projectsTitle.textContent = lang.projects.title;
        const projectsList = document.getElementById('projects-list');
        if (projectsList) {
            projectsList.innerHTML = '';
            lang.projects.items.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                `;
                projectsList.appendChild(projectCard);
            });
        }

        // Certifications Section
        const certificationsTitle = document.getElementById('certifications-title');
        if (certificationsTitle) certificationsTitle.textContent = lang.certifications.title;
        const certList = document.getElementById('cert-list');
        if (certList) {
            certList.innerHTML = '';
            lang.certifications.items.forEach(cert => {
                const certItem = document.createElement('li');
                certItem.className = 'cert-item';
                certItem.innerHTML = `<i data-lucide="award"></i> ${cert}`;
                certList.appendChild(certItem);
            });
        }

        // Contact Section
        const contactTitle = document.getElementById('contact-title');
        if (contactTitle) contactTitle.textContent = lang.contact.title;
        const labelEmail = document.getElementById('label-email');
        if (labelEmail) labelEmail.textContent = lang.contact.email;
        const labelPhone = document.getElementById('label-phone');
        if (labelPhone) labelPhone.textContent = lang.contact.phone;
        const labelLocation = document.getElementById('label-location');
        if (labelLocation) labelLocation.textContent = lang.contact.location;
        const labelLinkedin = document.getElementById('label-linkedin');
        if (labelLinkedin) labelLinkedin.textContent = lang.contact.linkedin;
        
        // Update contact info items
        const emailItem = document.getElementById('contact-email');
        if (emailItem) {
            const emailText = emailItem.querySelector('.contact-info-text');
            if (emailText) emailText.textContent = lang.personal.email;
            emailItem.href = `mailto:${lang.personal.email}`;
        }

        const phoneItem = document.getElementById('contact-phone');
        if (phoneItem) {
            const phoneText = phoneItem.querySelector('.contact-info-text');
            if (phoneText) phoneText.textContent = lang.personal.phone;
            phoneItem.href = `tel:${lang.personal.phone}`;
        }

        const locationElement = document.getElementById('contact-location');
        if (locationElement) locationElement.textContent = lang.personal.location;

        const linkedinItem = document.getElementById('contact-linkedin');
        if (linkedinItem) {
            const linkedinText = linkedinItem.querySelector('.contact-info-text');
            if (linkedinText) linkedinText.textContent = lang.contact.connect;
            linkedinItem.href = lang.personal.linkedin;
            linkedinItem.target = '_blank';
        }
        
        const formName = document.getElementById('form-name');
        if (formName) formName.placeholder = lang.contact.namePlaceholder;
        const formEmail = document.getElementById('form-email');
        if (formEmail) formEmail.placeholder = lang.contact.emailPlaceholder;
        const formMessage = document.getElementById('form-message');
        if (formMessage) formMessage.placeholder = lang.contact.messagePlaceholder;
        const formSubmit = document.getElementById('form-submit');
        if (formSubmit) formSubmit.textContent = lang.contact.sendBtn;

        // Initialize EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.init(configData.contact.emailjs.publicKey);
        }

        // Handle form submission with EmailJS
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const submitBtn = document.getElementById('form-submit');
                const formStatus = document.getElementById('form-status');

                // Show loading state
                submitBtn.disabled = true;
                submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';
                formStatus.textContent = '';

                // Get form data
                const formData = {
                    user_name: document.getElementById('form-name').value,
                    user_email: document.getElementById('form-email').value,
                    message: document.getElementById('form-message').value
                };

                // Send email using EmailJS
                emailjs.send(
                    configData.contact.emailjs.serviceId,
                    configData.contact.emailjs.templateId,
                    formData
                )
                .then(function() {
                    // Success
                    formStatus.textContent = currentLang === 'en' 
                        ? 'Message sent successfully!' 
                        : 'تم إرسال الرسالة بنجاح!';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = currentLang === 'en' ? 'Send Message' : 'إرسال الرسالة';

                    // Clear status after 5 seconds
                    setTimeout(() => {
                        formStatus.textContent = '';
                    }, 5000);
                })
                .catch(function(error) {
                    // Error
                    console.error('EmailJS error:', error);
                    formStatus.textContent = currentLang === 'en' 
                        ? 'Failed to send message. Please try again.' 
                        : 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.';
                    formStatus.className = 'form-status error';
                    submitBtn.disabled = false;
                    submitBtn.textContent = currentLang === 'en' ? 'Send Message' : 'إرسال الرسالة';
                });
            });
        }

        // Footer Section
        const footerLinkedin = document.getElementById('footer-linkedin');
        if (footerLinkedin) {
            footerLinkedin.href = lang.personal.linkedin;
            footerLinkedin.target = '_blank';
        }
        const footerMail = document.getElementById('footer-mail');
        if (footerMail) footerMail.href = `mailto:${lang.personal.email}`;
        const yearElement = document.getElementById('year');
        if (yearElement) yearElement.textContent = new Date().getFullYear();

        // Refresh Icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function initializeIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
});
