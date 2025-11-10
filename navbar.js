// Centralized Navigation Bar Component
// This file injects the standardized navbar HTML into all pages

(function() {
    'use strict';
    
    // Navbar HTML content
    const navbarHTML = `
    <header class="bg-[#00449E] fixed top-0 left-0 right-0 z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <h1 class="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white flex items-center">
                <a href="index.html" target="_top" class="flex items-center text-white hover:text-[#85BDE9] transition-colors duration-200"><span class="text-xl sm:text-2xl md:text-3xl lg:text-3xl mr-2 sm:mr-3">🌐</span> Strategic Solutions Hub</a>
            </h1>
            <!-- Desktop Navigation with Dropdowns -->
            <nav class="hidden lg:flex items-center space-x-6">
                <!-- Business Growth Solutions Dropdown -->
                <div class="relative group">
                    <button class="text-white hover:text-[#85BDE9] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                        Business Growth
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div class="py-2">
                            <a href="payment-gateway-solution.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">💰 Payment Gateway Scaling (For C-Level/Execs)</a>
                            <a href="payment-gateway-technical-infographic.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">🔧 Payment Gateway Scaling (Technical Deep Dive)</a>
                            <a href="investment-banking-crm-solution.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">💼 Investment Banking CRM (For C-Level/Execs)</a>
                            <a href="investment-banking-crm-technical-infographic.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">🔬 Investment Banking CRM (Technical Deep Dive)</a>
                            <a href="investefy.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">📈 Investefy Advisory Platform</a>
                        </div>
                    </div>
                </div>

                <!-- Security & Compliance Dropdown -->
                <div class="relative group">
                    <button class="text-white hover:text-[#85BDE9] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                        Security & Compliance
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div class="py-2">
                            <a href="payment-gateway-security-solution.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">🛡️ Payment Gateway Security (For C-Level/Execs)</a>
                            <a href="payment-gateway-security-technical-infographic.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">💻 Payment Gateway Security (Technical Deep Dive)</a>
                        </div>
                    </div>
                </div>

                <!-- Product & Requirements Dropdown -->
                <div class="relative group">
                    <button class="text-white hover:text-[#85BDE9] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                        Product & Requirements
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div class="py-2">
                            <a href="question-bank-prd.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">📝 Question Bank Management System PRD</a>
                            <a href="payment-gateway-questions.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">❓ Payment Gateway Integration Requirements</a>
                            <a href="apartment-management-system-prd.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">🏠 Apartment Management System PRD</a>
                        </div>
                    </div>
                </div>

                <!-- Education & Learning Dropdown -->
                <div class="relative group">
                    <button class="text-white hover:text-[#85BDE9] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                        Education & Learning
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div class="py-2">
                            <a href="lms-presentation.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">💡 Learning by Doing Methodology</a>
                            <a href="university-management-system.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">🎓 University Management System</a>
                            <a href="college-management-system.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">🎓 College Management System (SIMS Apex)</a>
                        </div>
                    </div>
                </div>

                <!-- Healthcare Solutions Dropdown -->
                <div class="relative group">
                    <button class="text-white hover:text-[#85BDE9] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                        Healthcare Solutions
                        <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div class="py-2">
                            <a href="heptacare-health.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#85BDE9] hover:text-white">🏥 HeptaCare Health Platform</a>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Mobile and Tablet menu button -->
            <button id="mobile-menu-button" class="lg:hidden p-2 rounded-md text-white hover:bg-[#0076D4] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu">
                <svg id="mobile-menu-icon-open" class="h-6 w-6 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg id="mobile-menu-icon-close" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Mobile Navigation Menu -->
            <div id="mobile-menu" class="lg:hidden hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-gray-700 shadow-lg z-50">
                <div class="px-4 py-4 space-y-4">
                    <!-- Business Growth Solutions -->
                    <div class="border-b border-gray-700 pb-4">
                        <button class="text-white hover:text-[#85BDE9] font-medium mb-2 flex items-center w-full text-left" onclick="toggleMobileDropdown('business-growth')">
                            Business Growth Solutions
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="business-growth-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="business-growth-menu" class="hidden space-y-2 ml-4">
                            <a href="payment-gateway-solution.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">💰 Payment Gateway Scaling (For C-Level/Execs)</a>
                            <a href="payment-gateway-technical-infographic.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">🔧 Payment Gateway Scaling (Technical Deep Dive)</a>
                            <a href="investment-banking-crm-solution.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">💼 Investment Banking CRM (For C-Level/Execs)</a>
                            <a href="investment-banking-crm-technical-infographic.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">🔬 Investment Banking CRM (Technical Deep Dive)</a>
                            <a href="investefy.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">📈 Investefy Advisory Platform</a>
                        </div>
                    </div>

                    <!-- Security & Compliance -->
                    <div class="border-b border-gray-700 pb-4">
                        <button class="text-white hover:text-[#85BDE9] font-medium mb-2 flex items-center w-full text-left" onclick="toggleMobileDropdown('security-compliance')">
                            Security & Compliance
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="security-compliance-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="security-compliance-menu" class="hidden space-y-2 ml-4">
                            <a href="payment-gateway-security-solution.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">🛡️ Payment Gateway Security (For C-Level/Execs)</a>
                            <a href="payment-gateway-security-technical-infographic.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">💻 Payment Gateway Security (Technical Deep Dive)</a>
                        </div>
                    </div>

                    <!-- Product & Requirements -->
                    <div class="border-b border-gray-700 pb-4">
                        <button class="text-white hover:text-[#85BDE9] font-medium mb-2 flex items-center w-full text-left" onclick="toggleMobileDropdown('product-requirements')">
                            Product & Requirements
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="product-requirements-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="product-requirements-menu" class="hidden space-y-2 ml-4">
                            <a href="question-bank-prd.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">📝 Question Bank Management System PRD</a>
                            <a href="payment-gateway-questions.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">❓ Payment Gateway Integration Requirements</a>
                            <a href="apartment-management-system-prd.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">🏠 Apartment Management System PRD</a>
                        </div>
                    </div>

                    <!-- Education & Learning -->
                    <div class="border-b border-gray-700 pb-4">
                        <button class="text-white hover:text-[#85BDE9] font-medium mb-2 flex items-center w-full text-left" onclick="toggleMobileDropdown('education-learning')">
                            Education & Learning
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="education-learning-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="education-learning-menu" class="hidden space-y-2 ml-4">
                            <a href="lms-presentation.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">💡 Learning by Doing Methodology</a>
                            <a href="university-management-system.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">🎓 University Management System</a>
                            <a href="college-management-system.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">🎓 College Management System (SIMS Apex)</a>
                        </div>
                    </div>

                    <!-- Healthcare Solutions -->
                    <div class="border-b border-gray-700 pb-4">
                        <button class="text-white hover:text-[#85BDE9] font-medium mb-2 flex items-center w-full text-left" onclick="toggleMobileDropdown('healthcare')">
                            Healthcare Solutions
                            <svg class="ml-auto h-4 w-4 transform transition-transform" id="healthcare-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="healthcare-menu" class="hidden space-y-2 ml-4">
                            <a href="heptacare-health.html" class="block text-gray-300 hover:text-[#85BDE9] text-sm py-1">🏥 HeptaCare Health Platform</a>
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
