/* ========================================
   SCALIFY WEBSITE - MAIN JAVASCRIPT
   Navbar behavior, translations, interactions
   ======================================== */

// ==========================================
// TRANSLATIONS
// ==========================================
const translations = {
    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.solutions": "Solutions",
        "nav.pos": "Scalify POS",
        "nav.contact": "Contact",
        "nav.cta": "Contactez-nous",

        // Hero
        "hero.title": "Des logiciels sur mesure<br>pour votre business",
        "hero.subtitle": "Scalify conçoit et développe des solutions logicielles professionnelles pour les entreprises, cabinets médicaux, supérettes et commerces en Algérie.",
        "hero.cta1": "Découvrir nos solutions",
        "hero.cta2": "Nous contacter",

        // Trust
        "trust.title": "Nos clients nous font confiance",
        "trust.clients": "Clients satisfaits",
        "trust.years": "Années d'expérience",
        "trust.support": "Support technique",

        // Services
        "services.title": "Solutions pour chaque secteur",
        "services.subtitle": "Des logiciels adaptés à vos besoins métier",
        "services.superettes.title": "Supérettes & Commerces",
        "services.superettes.desc": "Gestion de caisse, stock, facturation et fidélité clients tout-en-un.",
        "services.medical.title": "Cabinets Médicaux",
        "services.medical.desc": "Gestion des patients, rendez-vous, ordonnances et dossiers médicaux.",
        "services.enterprise.title": "Entreprises",
        "services.enterprise.desc": "ERP, CRM et solutions personnalisées pour votre activité.",
        "services.retail.title": "Magasins",
        "services.retail.desc": "Point de vente, inventaire et rapports de performance.",
        "services.gym.title": "Salles de Musculation",
        "services.gym.desc": "Gestion des abonnements, membres et paiements pour votre salle de sport.",

        // Featured
        "featured.badge": "Produit phare",
        "featured.title": "Scalify POS",
        "featured.desc": "Le logiciel de caisse le plus complet pour les supérettes et commerces algériens. Interface tactile, gestion de stock, facturation A4 et bien plus.",
        "featured.f1": "✓ Point de vente tactile",
        "featured.f2": "✓ Gestion de stock automatique",
        "featured.f3": "✓ Facturation conforme",
        "featured.f4": "✓ Tableaux de bord",
        "featured.f5": "✓ Programme de fidélité",
        "featured.f6": "✓ Fonctionne hors ligne",
        "featured.cta": "En savoir plus",

        // CTA
        "cta.title": "Prêt à digitaliser votre business ?",
        "cta.desc": "Contactez-nous pour une démonstration gratuite ou un devis personnalisé.",
        "cta.whatsapp": "WhatsApp",
        "cta.call": "+213 5 62 60 15 18",

        // Footer
        "footer.company": "Entreprise",
        "footer.about": "À propos",
        "footer.contact": "Contact",
        "footer.products": "Produits",
        "footer.medical": "Scalify Medical",
        "footer.resources": "Ressources",
        "footer.docs": "Documentation",
        "footer.support": "Support",
        "footer.rights": "Tous droits réservés."
    },

    en: {
        // Navigation
        "nav.home": "Home",
        "nav.solutions": "Solutions",
        "nav.pos": "Scalify POS",
        "nav.contact": "Contact",
        "nav.cta": "Contact Us",

        // Hero
        "hero.title": "Custom software<br>for your business",
        "hero.subtitle": "Scalify designs and develops professional software solutions for businesses, medical practices, superettes and shops in Algeria.",
        "hero.cta1": "Discover our solutions",
        "hero.cta2": "Contact us",

        // Trust
        "trust.title": "Trusted by our clients",
        "trust.clients": "Satisfied clients",
        "trust.years": "Years of experience",
        "trust.support": "Technical support",

        // Services
        "services.title": "Solutions for every sector",
        "services.subtitle": "Software tailored to your business needs",
        "services.superettes.title": "Superettes & Shops",
        "services.superettes.desc": "All-in-one POS, inventory, invoicing and customer loyalty.",
        "services.medical.title": "Medical Practices",
        "services.medical.desc": "Patient management, appointments, prescriptions and medical records.",
        "services.enterprise.title": "Enterprises",
        "services.enterprise.desc": "ERP, CRM and custom solutions for your business.",
        "services.retail.title": "Retail Stores",
        "services.retail.desc": "Point of sale, inventory and performance reports.",
        "services.gym.title": "Fitness Centers",
        "services.gym.desc": "Membership management, members and payments for your gym.",

        // Featured
        "featured.badge": "Featured product",
        "featured.title": "Scalify POS",
        "featured.desc": "The most complete POS software for Algerian superettes and shops. Touch interface, stock management, A4 invoicing and much more.",
        "featured.f1": "✓ Touch point of sale",
        "featured.f2": "✓ Automatic stock management",
        "featured.f3": "✓ Compliant invoicing",
        "featured.f4": "✓ Dashboards",
        "featured.f5": "✓ Loyalty program",
        "featured.f6": "✓ Works offline",
        "featured.cta": "Learn more",

        // CTA
        "cta.title": "Ready to digitize your business?",
        "cta.desc": "Contact us for a free demo or custom quote.",
        "cta.whatsapp": "WhatsApp",
        "cta.call": "+213 5 62 60 15 18",

        // Footer
        "footer.company": "Company",
        "footer.about": "About",
        "footer.contact": "Contact",
        "footer.products": "Products",
        "footer.medical": "Scalify Medical",
        "footer.resources": "Resources",
        "footer.docs": "Documentation",
        "footer.support": "Support",
        "footer.rights": "All rights reserved."
    },

    ar: {
        // Navigation
        "nav.home": "الرئيسية",
        "nav.solutions": "الحلول",
        "nav.pos": "سكاليفاي بوس",
        "nav.contact": "اتصل بنا",
        "nav.cta": "تواصل معنا",

        // Hero
        "hero.title": "برامج مخصصة<br>لعملك",
        "hero.subtitle": "سكاليفاي تصمم وتطور حلول برمجية احترافية للشركات والعيادات الطبية والمتاجر في الجزائر.",
        "hero.cta1": "اكتشف حلولنا",
        "hero.cta2": "تواصل معنا",

        // Trust
        "trust.title": "عملاؤنا يثقون بنا",
        "trust.clients": "عميل راضي",
        "trust.years": "سنوات خبرة",
        "trust.support": "دعم فني",

        // Services
        "services.title": "حلول لكل قطاع",
        "services.subtitle": "برامج مصممة لاحتياجات عملك",
        "services.superettes.title": "المتاجر والسوبرماركت",
        "services.superettes.desc": "نقاط البيع والمخزون والفواتير وولاء العملاء في حل واحد.",
        "services.medical.title": "العيادات الطبية",
        "services.medical.desc": "إدارة المرضى والمواعيد والوصفات والملفات الطبية.",
        "services.enterprise.title": "الشركات",
        "services.enterprise.desc": "أنظمة ERP و CRM وحلول مخصصة لنشاطك.",
        "services.retail.title": "المحلات التجارية",
        "services.retail.desc": "نقاط البيع والمخزون وتقارير الأداء.",
        "services.gym.title": "صالات رياضية",
        "services.gym.desc": "إدارة الاشتراكات والأعضاء والمدفوعات لصالتك الرياضية.",

        // Featured
        "featured.badge": "المنتج الرئيسي",
        "featured.title": "سكاليفاي بوس",
        "featured.desc": "أكمل برنامج لنقاط البيع للمتاجر الجزائرية. واجهة لمسية، إدارة المخزون، فواتير A4 والمزيد.",
        "featured.f1": "✓ نقطة بيع لمسية",
        "featured.f2": "✓ إدارة مخزون تلقائية",
        "featured.f3": "✓ فواتير متوافقة",
        "featured.f4": "✓ لوحات معلومات",
        "featured.f5": "✓ برنامج ولاء",
        "featured.f6": "✓ يعمل بدون إنترنت",
        "featured.cta": "اعرف المزيد",

        // CTA
        "cta.title": "مستعد لرقمنة عملك؟",
        "cta.desc": "تواصل معنا للحصول على عرض مجاني أو عرض أسعار مخصص.",
        "cta.whatsapp": "واتساب",
        "cta.call": "+213 5 62 60 15 18",

        // Footer
        "footer.company": "الشركة",
        "footer.about": "من نحن",
        "footer.contact": "اتصل بنا",
        "footer.products": "المنتجات",
        "footer.medical": "سكاليفاي ميديكال",
        "footer.resources": "الموارد",
        "footer.docs": "التوثيق",
        "footer.support": "الدعم",
        "footer.rights": "جميع الحقوق محفوظة."
    }
};

// ==========================================
// LANGUAGE HANDLING
// ==========================================
let currentLang = localStorage.getItem('scalify-lang') || 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('scalify-lang', lang);

    // Update HTML dir for RTL
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// ==========================================
// NAVBAR SCROLL BEHAVIOR
// Hide navbar + show mini-navbar on scroll down
// Show navbar + hide mini-navbar on scroll up/footer
// ==========================================
const navbar = document.getElementById('navbar');
const miniNavbar = document.getElementById('mini-navbar');
const footer = document.getElementById('footer');
let lastScrollY = 0;
let navbarHidden = false;
let ticking = false;

function updateNavbar() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const footerTop = footer ? footer.getBoundingClientRect().top : windowHeight + 100;

    // Check if scrolling down or up
    const scrollingDown = scrollY > lastScrollY;

    // Check if footer is visible
    const footerVisible = footerTop <= windowHeight;

    // Check if we're past the hero section
    const pastHero = scrollY > 200;

    if (scrollingDown && pastHero && !footerVisible) {
        // Scrolling down past hero - hide navbar, show mini-navbar
        if (!navbarHidden) {
            navbar.classList.add('hidden');
            if (miniNavbar) miniNavbar.classList.add('visible');
            navbarHidden = true;
        }
    } else if (!scrollingDown || footerVisible || scrollY < 100) {
        // Scrolling up, near footer, or back to top - show navbar, hide mini-navbar
        if (navbarHidden) {
            navbar.classList.remove('hidden');
            if (miniNavbar) miniNavbar.classList.remove('visible');
            navbarHidden = false;
        }
    }

    lastScrollY = scrollY;
    ticking = false;
}

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}

// ==========================================
// MOBILE MENU
// ==========================================
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

function toggleMobileMenu() {
    navbarMenu.classList.toggle('open');
    navbarToggle.classList.toggle('active');
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 100; // Account for navbar
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });

                // Close mobile menu if open
                navbarMenu.classList.remove('open');
            }
        });
    });
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    setLanguage(currentLang);
    updateLanguageButton(currentLang);

    // Language dropdown
    const langDropdown = document.getElementById('lang-dropdown');
    const langDropdownBtn = document.getElementById('lang-selector');

    if (langDropdownBtn) {
        langDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
    }

    // Language options in dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
            updateLanguageButton(lang);
            langDropdown.classList.remove('open');
        });
    });

    // Mini navbar dropdowns
    document.querySelectorAll('.mini-nav-item').forEach(item => {
        const btn = item.querySelector('.mini-nav-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close other dropdowns
                document.querySelectorAll('.mini-nav-item').forEach(other => {
                    if (other !== item) other.classList.remove('open');
                });
                item.classList.toggle('open');
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        if (langDropdown) langDropdown.classList.remove('open');
        document.querySelectorAll('.mini-nav-item').forEach(item => {
            item.classList.remove('open');
        });
    });

    // Scroll listener for navbar
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu toggle
    if (navbarToggle) {
        navbarToggle.addEventListener('click', toggleMobileMenu);
    }

    // Smooth scroll
    setupSmoothScroll();

    // Initial navbar state
    updateNavbar();

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Update language button text
function updateLanguageButton(lang) {
    const langCurrent = document.getElementById('lang-current');
    if (!langCurrent) return;

    const langNames = {
        fr: 'Français (FR)',
        en: 'English (US)',
        ar: 'العربية'
    };

    langCurrent.textContent = langNames[lang] || langNames.fr;
}

// ==========================================
// FOOTER MAGNETIC PARTICLES ANIMATION
// ==========================================
function initFooter3DAnimation() {
    const canvas = document.getElementById('footer-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 40;

    // Mouse tracking
    let mouse = {
        x: null,
        y: null,
        radius: 150
    };

    function resize() {
        const wrapper = canvas.parentElement;
        canvas.width = wrapper.offsetWidth;
        canvas.height = wrapper.offsetHeight;
    }

    // Track mouse position relative to canvas
    canvas.parentElement.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.parentElement.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.baseX = this.x;
            this.baseY = this.y;
            this.size = Math.random() * 3 + 1;
            this.density = (Math.random() * 30) + 1;
            this.opacity = Math.random() * 0.6 + 0.2;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
        }

        update() {
            // Calculate distance from mouse
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Magnetic attraction/repulsion
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const dirX = dx / distance;
                    const dirY = dy / distance;

                    // Attraction effect (particles move toward cursor)
                    this.x += dirX * force * 2;
                    this.y += dirY * force * 2;
                }
            }

            // Slow drift
            this.baseX += this.vx;
            this.baseY += this.vy;

            // Return to base position slowly
            const returnForce = 0.02;
            this.x += (this.baseX - this.x) * returnForce;
            this.y += (this.baseY - this.y) * returnForce;

            // Wrap around edges
            if (this.baseX < 0) this.baseX = canvas.width;
            if (this.baseX > canvas.width) this.baseX = 0;
            if (this.baseY < 0) this.baseY = canvas.height;
            if (this.baseY > canvas.height) this.baseY = 0;
        }

        draw() {
            // Main particle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(245, 166, 35, ${this.opacity})`;
            ctx.fill();

            // Glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(245, 166, 35, ${this.opacity * 0.2})`;
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.3;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(245, 166, 35, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Connect particles to mouse
        if (mouse.x !== null && mouse.y !== null) {
            particles.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const opacity = (1 - distance / mouse.radius) * 0.4;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(245, 166, 35, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        connectParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        init();
    });

    resize();
    init();
    animate();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initFooter3DAnimation);
