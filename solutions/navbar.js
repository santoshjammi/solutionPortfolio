// Centralized Navigation Bar Component
// This file injects the standardized navbar HTML into all pages

(function() {
    'use strict';
    
    // Navbar HTML content
    const navbarHTML = `
    <style>
      .dropdown-link {
        display: block; padding: 8px 16px; font-size: 14px;
        color: #1C2B33; text-decoration: none;
        transition: background 0.15s, color 0.15s;
      }
      .dropdown-link:hover { background: #0064E0; color: #ffffff; }
      .mobile-sub-link {
        display: block; color: #5D6C7B; font-size: 13px;
        padding: 5px 0; text-decoration: none;
        transition: color 0.15s;
      }
      .mobile-sub-link:hover { color: #0064E0; }
    </style>
    `;
    <header id="site-nav" style="background:rgba(241,244,247,0.90);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,0.08);position:fixed;top:0;left:0;right:0;z-index:50;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="height:56px;display:flex;align-items:center;justify-content:space-between;">
            <h1 style="margin:0;font-size:clamp(15px,2vw,18px);font-weight:700;">
                <a href="index.html" target="_top" style="display:flex;align-items:center;gap:10px;color:#1C2B33;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#0064E0'" onmouseout="this.style.color='#1C2B33'"><span style="font-size:1.4em;">🌐</span> Strategic Solutions Hub</a>
            </h1>
            <!-- Desktop Navigation with Dropdowns -->
            <nav class="hidden lg:flex items-center" style="gap:4px;">
                <!-- Business Growth Solutions Dropdown -->
                <div class="relative group">
                    <button style="color:#1C2B33;font-size:14px;font-weight:500;padding:8px 12px;background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;font-family:inherit;border-radius:8px;transition:background 0.15s;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='transparent'">
                        Business Growth
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style="background:#ffffff;border-radius:16px;box-shadow:0 12px 28px 0 rgba(0,0,0,0.20),0 2px 4px 0 rgba(0,0,0,0.10);padding:8px 0;">
                        <div>
                            <a href="payment-gateway-solution.html" class="dropdown-link">💰 Payment Gateway Scaling (For C-Level/Execs)</a>
                            <a href="payment-gateway-technical-infographic.html" class="dropdown-link">🔧 Payment Gateway Scaling (Technical Deep Dive)</a>
                            <a href="investment-banking-crm-solution.html" class="dropdown-link">💼 Investment Banking CRM (For C-Level/Execs)</a>
                            <a href="investment-banking-crm-technical-infographic.html" class="dropdown-link">🔬 Investment Banking CRM (Technical Deep Dive)</a>
                            <a href="investefy.html" class="dropdown-link">📈 Investefy Advisory Platform</a>
                            <a href="logo-request-form.html" class="dropdown-link">🎨 Logo Design Services</a>
                        </div>
                    </div>
                </div>

                <!-- Security & Compliance Dropdown -->
                <div class="relative group">
                    <button style="color:#1C2B33;font-size:14px;font-weight:500;padding:8px 12px;background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;font-family:inherit;border-radius:8px;transition:background 0.15s;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='transparent'">
                        Security &amp; Compliance
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style="background:#ffffff;border-radius:16px;box-shadow:0 12px 28px 0 rgba(0,0,0,0.20),0 2px 4px 0 rgba(0,0,0,0.10);padding:8px 0;">
                        <div>
                            <a href="payment-gateway-security-solution.html" class="dropdown-link">🛡️ Payment Gateway Security (For C-Level/Execs)</a>
                            <a href="payment-gateway-security-technical-infographic.html" class="dropdown-link">💻 Payment Gateway Security (Technical Deep Dive)</a>
                        </div>
                    </div>
                </div>

                <!-- Product & Requirements Dropdown -->
                <div class="relative group">
                    <button style="color:#1C2B33;font-size:14px;font-weight:500;padding:8px 12px;background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;font-family:inherit;border-radius:8px;transition:background 0.15s;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='transparent'">
                        Product &amp; Requirements
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style="background:#ffffff;border-radius:16px;box-shadow:0 12px 28px 0 rgba(0,0,0,0.20),0 2px 4px 0 rgba(0,0,0,0.10);padding:8px 0;">
                        <div>
                            <a href="question-bank-prd.html" class="dropdown-link">📝 Question Bank Management System PRD</a>
                            <a href="payment-gateway-questions.html" class="dropdown-link">❓ Payment Gateway Integration Requirements</a>
                            <a href="apartment-management-system-prd.html" class="dropdown-link">🏠 Apartment Management System PRD</a>
                        </div>
                    </div>
                </div>

                <!-- Education & Learning Dropdown -->
                <div class="relative group">
                    <button style="color:#1C2B33;font-size:14px;font-weight:500;padding:8px 12px;background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;font-family:inherit;border-radius:8px;transition:background 0.15s;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='transparent'">
                        Education &amp; Learning
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style="background:#ffffff;border-radius:16px;box-shadow:0 12px 28px 0 rgba(0,0,0,0.20),0 2px 4px 0 rgba(0,0,0,0.10);padding:8px 0;">
                        <div>
                            <a href="lms-presentation.html" class="dropdown-link">💡 Learning by Doing Methodology</a>
                            <a href="university-management-system.html" class="dropdown-link">🎓 University Management System</a>
                            <a href="college-management-system.html" class="dropdown-link">🎓 College Management System (SIMS Apex)</a>
                        </div>
                    </div>
                </div>

                <!-- Healthcare Solutions Dropdown -->
                <div class="relative group">
                    <button style="color:#1C2B33;font-size:14px;font-weight:500;padding:8px 12px;background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;font-family:inherit;border-radius:8px;transition:background 0.15s;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='transparent'">
                        Healthcare Solutions
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style="background:#ffffff;border-radius:16px;box-shadow:0 12px 28px 0 rgba(0,0,0,0.20),0 2px 4px 0 rgba(0,0,0,0.10);padding:8px 0;">
                        <div>
                            <a href="heptacare-health.html" class="dropdown-link">🏥 HeptaCare Health Platform</a>
                            <a href="aviation-training-solution.html" class="dropdown-link">✈️ Aviation Training Management</a>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Get a Demo CTA pill -->
            <a href="mailto:solutions@countrysnews.com?subject=Solutions%20Demo%20Request" class="hidden lg:inline-flex" style="align-items:center;background:#0064E0;color:#ffffff;border-radius:100px;padding:8px 20px;font-size:14px;font-weight:500;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#0143B5'" onmouseout="this.style.background='#0064E0'">Get a Demo</a>

            <!-- Mobile and Tablet menu button -->
            <button id="mobile-menu-button" style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;background:none;border:none;cursor:pointer;color:#1C2B33;border-radius:8px;" class="lg:hidden" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu">
                <svg id="mobile-menu-icon-open" class="h-6 w-6 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg id="mobile-menu-icon-close" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Mobile Navigation Menu -->
            <div id="mobile-menu" class="lg:hidden hidden absolute top-full left-0 right-0" style="background:#ffffff;border-top:1px solid #DEE3E9;box-shadow:0 12px 28px 0 rgba(0,0,0,0.15);z-index:50;">
                <div class="px-4 py-4 space-y-4">
                    <!-- Business Growth Solutions -->
                    <div style="border-bottom:1px solid #DEE3E9;padding-bottom:12px;">
                        <button style="color:#1C2B33;font-weight:600;font-size:14px;background:none;border:none;cursor:pointer;display:flex;align-items:center;width:100%;text-align:left;padding:8px 0;font-family:inherit;" onclick="toggleMobileDropdown('business-growth')" onmouseover="this.style.color='#0064E0'" onmouseout="this.style.color='#1C2B33'">
                            Business Growth Solutions
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="business-growth-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="business-growth-menu" class="hidden" style="margin-left:16px;margin-top:4px;display:flex;flex-direction:column;gap:4px;">
                            <a href="payment-gateway-solution.html" class="mobile-sub-link">💰 Payment Gateway Scaling (For C-Level/Execs)</a>
                            <a href="payment-gateway-technical-infographic.html" class="mobile-sub-link">🔧 Payment Gateway Scaling (Technical Deep Dive)</a>
                            <a href="investment-banking-crm-solution.html" class="mobile-sub-link">💼 Investment Banking CRM (For C-Level/Execs)</a>
                            <a href="investment-banking-crm-technical-infographic.html" class="mobile-sub-link">🔬 Investment Banking CRM (Technical Deep Dive)</a>
                            <a href="investefy.html" class="mobile-sub-link">📈 Investefy Advisory Platform</a>
                            <a href="logo-request-form.html" class="mobile-sub-link">🎨 Logo Design Services</a>
                        </div>
                    </div>

                    <!-- Security & Compliance -->
                    <div style="border-bottom:1px solid #DEE3E9;padding-bottom:12px;">
                        <button style="color:#1C2B33;font-weight:600;font-size:14px;background:none;border:none;cursor:pointer;display:flex;align-items:center;width:100%;text-align:left;padding:8px 0;font-family:inherit;" onclick="toggleMobileDropdown('security-compliance')" onmouseover="this.style.color='#0064E0'" onmouseout="this.style.color='#1C2B33'">
                            Security & Compliance
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="security-compliance-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="security-compliance-menu" class="hidden" style="margin-left:16px;margin-top:4px;display:flex;flex-direction:column;gap:4px;">
                            <a href="payment-gateway-security-solution.html" class="mobile-sub-link">🛡️ Payment Gateway Security (For C-Level/Execs)</a>
                            <a href="payment-gateway-security-technical-infographic.html" class="mobile-sub-link">💻 Payment Gateway Security (Technical Deep Dive)</a>
                        </div>
                    </div>

                    <!-- Product & Requirements -->
                    <div style="border-bottom:1px solid #DEE3E9;padding-bottom:12px;">
                        <button style="color:#1C2B33;font-weight:600;font-size:14px;background:none;border:none;cursor:pointer;display:flex;align-items:center;width:100%;text-align:left;padding:8px 0;font-family:inherit;" onclick="toggleMobileDropdown('product-requirements')" onmouseover="this.style.color='#0064E0'" onmouseout="this.style.color='#1C2B33'">
                            Product & Requirements
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="product-requirements-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="product-requirements-menu" class="hidden" style="margin-left:16px;margin-top:4px;display:flex;flex-direction:column;gap:4px;">
                            <a href="question-bank-prd.html" class="mobile-sub-link">📝 Question Bank Management System PRD</a>
                            <a href="payment-gateway-questions.html" class="mobile-sub-link">❓ Payment Gateway Integration Requirements</a>
                            <a href="apartment-management-system-prd.html" class="mobile-sub-link">🏠 Apartment Management System PRD</a>
                        </div>
                    </div>

                    <!-- Education & Learning -->
                    <div style="border-bottom:1px solid #DEE3E9;padding-bottom:12px;">
                        <button style="color:#1C2B33;font-weight:600;font-size:14px;background:none;border:none;cursor:pointer;display:flex;align-items:center;width:100%;text-align:left;padding:8px 0;font-family:inherit;" onclick="toggleMobileDropdown('education-learning')" onmouseover="this.style.color='#0064E0'" onmouseout="this.style.color='#1C2B33'">
                            Education & Learning
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="education-learning-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="education-learning-menu" class="hidden" style="margin-left:16px;margin-top:4px;display:flex;flex-direction:column;gap:4px;">
                            <a href="lms-presentation.html" class="mobile-sub-link">💡 Learning by Doing Methodology</a>
                            <a href="university-management-system.html" class="mobile-sub-link">🎓 University Management System</a>
                            <a href="college-management-system.html" class="mobile-sub-link">🎓 College Management System (SIMS Apex)</a>
                        </div>
                    </div>

                    <!-- Healthcare Solutions -->
                    <div style="border-bottom:1px solid #DEE3E9;padding-bottom:12px;">
                        <button style="color:#1C2B33;font-weight:600;font-size:14px;background:none;border:none;cursor:pointer;display:flex;align-items:center;width:100%;text-align:left;padding:8px 0;font-family:inherit;" onclick="toggleMobileDropdown('healthcare')" onmouseover="this.style.color='#0064E0'" onmouseout="this.style.color='#1C2B33'">
                            Healthcare Solutions
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="healthcare-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="healthcare-menu" class="hidden" style="margin-left:16px;margin-top:4px;display:flex;flex-direction:column;gap:4px;">
                            <a href="heptacare-health.html" class="mobile-sub-link">🏥 HeptaCare Health Platform</a>
                            <a href="aviation-training-solution.html" class="mobile-sub-link">✈️ Aviation Training Management</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;

    // Mobile menu functionality
    const mobileMenuScript = `
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuIconOpen = document.getElementById('mobile-menu-icon-open');
        const mobileMenuIconClose = document.getElementById('mobile-menu-icon-close');

        function toggleMobileMenu() {
            const isOpen = mobileMenu.classList.toggle('hidden');
            mobileMenuIconOpen.classList.toggle('hidden', !isOpen);
            mobileMenuIconClose.classList.toggle('hidden', isOpen);
            mobileMenuButton.setAttribute('aria-expanded', !isOpen);
        }

        function toggleMobileDropdown(dropdownId) {
            const menu = document.getElementById(dropdownId + '-menu');
            const arrow = document.getElementById(dropdownId + '-arrow');

            // Close all other dropdowns
            document.querySelectorAll('[id$="-menu"]').forEach(m => {
                if (m.id !== dropdownId + '-menu') {
                    m.classList.add('hidden');
                }
            });
            document.querySelectorAll('[id$="-arrow"]').forEach(a => {
                if (a.id !== dropdownId + '-arrow') {
                    a.classList.remove('rotate-180');
                }
            });

            // Toggle current dropdown
            menu.classList.toggle('hidden');
            arrow.classList.toggle('rotate-180');
        }

        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', toggleMobileMenu);

            // Close mobile menu when clicking outside or on a link
            document.addEventListener('click', (e) => {
                if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    if (!mobileMenu.classList.contains('hidden')) {
                        toggleMobileMenu();
                    }
                }
            });

            // Close mobile menu on window resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1024 && !mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            });

            // Close mobile menu when a link is clicked
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    toggleMobileMenu();
                });
            });
        }
    `;

    // Function to inject navbar
    function injectNavbar() {
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = navbarHTML;
            
            // Inject and execute the mobile menu script
            const script = document.createElement('script');
            script.textContent = mobileMenuScript;
            document.body.appendChild(script);
        }
    }

    // Initialize navbar when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNavbar);
    } else {
        injectNavbar();
    }
})();
