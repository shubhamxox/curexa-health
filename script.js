document.addEventListener('DOMContentLoaded', () => {
    // Professional App Object for cleaner code structure
    const CurexaApp = {
        // Detailed content for services and individual tests
        content: {
            // General Service Details (for main service cards)
            services: {
                bloodtest: {
                    title: "Blood Tests & Diagnostics Overview",
                    body: `
                        <p>Our comprehensive lab panel helps doctors diagnose diseases, monitor treatments, and assess overall health. We partner with certified labs for accurate and timely results.</p>
                        <h4>Key Test Areas:</h4>
                        <ul>
                            <li>**Organ Function:** KFT (Kidney), LFT (Liver), Lipid Profile (Heart).</li>
                            <li>**Hormones:** TSH, Testosterone, Estrogen.</li>
                            <li>**Infection/Inflammation:** CBC, CRP, Dengue, Malaria.</li>
                        </ul>
                    `
                },
                xray: {
                    title: "X-Ray & ECG - Imaging Services",
                    body: `
                        <p>We provide access to reliable diagnostic imaging services. X-rays offer fast, non-invasive internal views, and ECG screens heart function.</p>
                        <h4>Imaging Services:</h4>
                        <ul>
                            <li>**Digital X-Ray:** Used for chest, bone fractures, infections, and spinal issues.</li>
                            <li>**ECG (Electrocardiogram):** Essential for checking the electrical activity of the heart and detecting cardiac issues.</li>
                        </ul>
                        <p>Preparation is minimal, but our support team will guide you on necessary steps before your appointment.</p>
                    `
                },
                ultrasound: {
                    title: "Ultrasound & Sonography Scans",
                    body: `
                        <p>Ultrasound is a safe, radiation-free method using sound waves to create live images of internal organs, crucial for soft tissue examination.</p>
                        <h4>Common Scans Include:</h4>
                        <ul>
                            <li>**Abdomen/Pelvis:** Examines liver, gallbladder, kidneys, bladder, uterus, and ovaries.</li>
                            <li>**Thyroid/Neck:** Checks for nodules, cysts, or inflammation.</li>
                            <li>**Obstetric:** Used for monitoring fetal development during pregnancy.</li>
                        </ul>
                    `
                }
            },
            // Individual Blood Test Details (for price list clicks)
            tests: {
                cbc: {
                    title: "Complete Blood Count (CBC)",
                    body: `
                        <p>The CBC is one of the most common and valuable diagnostic tests, providing a snapshot of your general health.</p>
                        <h4>What it Measures:</h4>
                        <ul>
                            <li>**Red Blood Cells (RBC):** For detecting anemia or dehydration.</li>
                            <li>**White Blood Cells (WBC):** Essential for identifying infections or immune disorders.</li>
                            <li>**Platelets:** Crucial for blood clotting ability.</li>
                        </ul>
                    `
                },
                lft: {
                    title: "Liver Function Test (LFT)",
                    body: `
                        <p>The LFT panel measures various enzymes and proteins produced by the liver to assess its health and function.</p>
                        <h4>Key Markers:</h4>
                        <ul>
                            <li>**Bilirubin:** High levels indicate jaundice.</li>
                            <li>**SGOT/SGPT (AST/ALT):** Enzymes released when the liver is damaged.</li>
                            <li>**Alkaline Phosphatase (ALP):** Can indicate bile duct blockages.</li>
                        </ul>
                    `
                },
                kft: {
                    title: "Kidney Function Test (KFT)",
                    body: `
                        <p>A KFT determines how well your kidneys are filtering waste from your blood. Essential for managing chronic conditions.</p>
                        <h4>Key Markers:</h4>
                        <ul>
                            <li>**Creatinine:** Waste product that increases when kidney function declines.</li>
                            <li>**Urea (BUN):** Indicates how well the kidneys are eliminating nitrogenous waste.</li>
                            <li>**Uric Acid:** High levels can lead to gout.</li>
                        </ul>
                    `
                },
                // Add more specific test details here if needed!
            }
        },

        // --- CORE PROFESSIONAL FUNCTIONS ---

        init: function() {
            this.handleLoadingSpinner();
            this.handleFormSubmission();
            this.handleFAQAccordion();
            this.handleServiceModals();
            this.handleTestDetails();
            this.handleStickyBar();
        },

        handleLoadingSpinner: function() {
            const spinner = document.getElementById('loading-spinner');
            setTimeout(() => {
                spinner.classList.add('hidden');
            }, 800); // Simulate an 0.8 second loading time
        },

        handleFormSubmission: function() {
            const orderForm = document.getElementById('orderForm');
            const formStatus = document.getElementById('formStatus');

            orderForm.addEventListener('submit', (e) => {
                e.preventDefault(); 
                const fullName = document.getElementById('fullName').value;

                // Simulate success and professional email dispatch
                formStatus.textContent = `Thank you, ${fullName}! Your request has been securely submitted. We will contact you via email/WhatsApp soon.`;
                formStatus.style.display = 'block';

                orderForm.reset();
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 6000);
            });
        },

        handleFAQAccordion: function() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                item.addEventListener('click', () => {
                    const answer = item.querySelector('.faq-answer');
                    // Close others (more professional UI)
                    faqItems.forEach(i => {
                        if (i !== item && i.classList.contains('active')) {
                            i.classList.remove('active');
                            i.querySelector('.faq-answer').style.maxHeight = '0';
                            i.querySelector('.faq-answer').style.paddingTop = '0';
                        }
                    });

                    // Toggle current item
                    item.classList.toggle('active');
                    if (item.classList.contains('active')) {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        answer.style.paddingTop = '1rem';
                    } else {
                        answer.style.maxHeight = '0';
                        answer.style.paddingTop = '0';
                    }
                });
            });
        },

        handleModalToggle: function(data) {
            const modal = document.getElementById("details-modal");
            document.getElementById('modal-title').innerHTML = data.title;
            document.getElementById('modal-body').innerHTML = data.body;
            modal.style.display = "block";

            // Scroll to the top of the modal content when opened
            document.querySelector('.modal-content').scrollTop = 0;
        },

        handleServiceModals: function() {
            const serviceCards = document.querySelectorAll('.service-card[data-service]');
            serviceCards.forEach(card => {
                card.addEventListener('click', () => {
                    const serviceKey = card.getAttribute('data-service');
                    const data = CurexaApp.content.services[serviceKey];
                    if (data) {
                        CurexaApp.handleModalToggle(data);
                    }
                });
            });

            // Close logic for all modals
            const modal = document.getElementById("details-modal");
            document.querySelector(".close-btn").onclick = () => modal.style.display = "none";
            window.onclick = (event) => {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        },

        // NEW: Dynamic Test Details (Click individual test name)
        handleTestDetails: function() {
            const testNames = document.querySelectorAll('.test-name[data-test]');
            testNames.forEach(nameElement => {
                nameElement.addEventListener('click', () => {
                    const testKey = nameElement.getAttribute('data-test');
                    const data = CurexaApp.content.tests[testKey];
                    if (data) {
                        CurexaApp.handleModalToggle(data);
                    }
                });
            });
        },

        // NEW: STICKY CONTACT BAR - Professional UX element
        handleStickyBar: function() {
            const stickyBar = document.getElementById('sticky-contact-bar');
            let lastScrollTop = 0;
            const scrollThreshold = 200; // Only show after scrolling down this much

            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTop > scrollThreshold) {
                    // Scrolling Down: Hide the bar quickly
                    if (scrollTop > lastScrollTop) {
                        stickyBar.classList.remove('visible');
                    } 
                    // Scrolling Up: Show the bar
                    else {
                        stickyBar.classList.add('visible');
                    }
                } else {
                    // At the top: Keep it hidden
                    stickyBar.classList.remove('visible');
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            }, false);
        }
    };

    CurexaApp.init();
});