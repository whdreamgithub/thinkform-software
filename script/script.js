//初始化菜单
function initMenu(){

  let topMenu=`<a href="index.html" class="flex-shrink-0">
              <div class="text-blue-700 font-bold text-2xl">ThinkForm Limited</div>
            </a>
            <nav class="hidden lg:flex ml-10 space-x-8">
              <div class="relative group">
                <button class="flex items-center text-gray-800 hover:text-blue-600 font-medium">
                  Solutions
                  <i data-lucide="chevron-down" class="ml-1 w-4 h-4"></i>
                </button>
                <div class="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                  <a href="cloud-solutions.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cloud Migration</a>
                  <a href="data-analytics.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Data Analytics</a>
                  <a href="managed-services.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Managed Services</a>
                  <a href="digital-workplace.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Digital Workplace</a>
                </div>
              </div>
              <div class="relative group">
                <button class="flex items-center text-gray-800 hover:text-blue-600 font-medium">
                  Services
                  <i data-lucide="chevron-down" class="ml-1 w-4 h-4"></i>
                </button>
                <div class="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                  <a href="service.html#ITConsulting" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT Consulting</a>
                  <a href="service.html#Implementation" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Implementation</a>
                  <a href="service.html#24Support" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">24/7 Support</a>
                  <a href="service.html#Training" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Training</a>
                </div>
              </div>
             
              <div class="relative group">
                <button class="flex items-center text-gray-800 hover:text-blue-600 font-medium">
                  Resources
                  <i data-lucide="chevron-down" class="ml-1 w-4 h-4"></i>
                </button>
                <div class="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                  <a href="blog.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog & Insights</a>
                  <a href="case-studies.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Case Studies</a>
                  <a href="webinars.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Webinars</a>
                  <a href="whitepapers.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Whitepapers</a>
                </div>
              </div>
              <div class="relative group">
                <button class="flex items-center text-gray-800 hover:text-blue-600 font-medium">
                  About
                  <i data-lucide="chevron-down" class="ml-1 w-4 h-4"></i>
                </button>
                <div class="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                  <a href="about.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
                  <a href="about.html#leadership" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leadership</a>
                  <a href="careers.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers</a>
                  <a href="contact.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
                </div>
              </div>
            </nav>`;

           

            let mobileMenu = `  <div class="py-2 border-b border-gray-200">
          <button class="flex justify-between items-center w-full text-left py-2 text-gray-800">
            Solutions
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
          <div class="mobile-dropdown pl-4 py-2 hidden">
            <a href="cloud-solutions.html" class="block py-2 text-gray-600">Cloud Migration</a>
            <a href="data-analytics.html" class="block py-2 text-gray-600">Data Analytics</a>
            <a href="managed-services.html" class="block py-2 text-gray-600">Managed Services</a>
            <a href="digital-workplace.html" class="block py-2 text-gray-600">Digital Workplace</a>
          </div>
        </div>
        <div class="py-2 border-b border-gray-200">
          <button class="flex justify-between items-center w-full text-left py-2 text-gray-800">
            Services
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
          <div class="mobile-dropdown pl-4 py-2 hidden">
            <a href="service.html#ITConsulting" class="block py-2 text-gray-600">IT Consulting</a>
            <a href="service.html#Implementation" class="block py-2 text-gray-600">Implementation</a>
            <a href="service.html#24Support" class="block py-2 text-gray-600">24/7 Support</a>
            <a href="service.html#Training" class="block py-2 text-gray-600">Training</a>
          </div>
        </div>

        <div class="py-2 border-b border-gray-200">
          <button class="flex justify-between items-center w-full text-left py-2 text-gray-800">
            Resources
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
          <div class="mobile-dropdown pl-4 py-2 hidden">
            <a href="blog.html" class="block py-2 text-gray-600">Blog & Insights</a>
            <a href="case-studies.html" class="block py-2 text-gray-600">Case Studies</a>
            <a href="webinars.html" class="block py-2 text-gray-600">Webinars</a>
            <a href="whitepapers.html" class="block py-2 text-gray-600">Whitepapers</a>
          </div>
        </div>

       
       
        <div class="py-2 border-b border-gray-200">
          <button class="flex justify-between items-center w-full text-left py-2 text-gray-800">
            About
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
          <div class="mobile-dropdown pl-4 py-2 hidden">
            <a href="about.html" class="block py-2 text-gray-600">About Us</a>
            <a href="about.html#leadership" class="block py-2 text-gray-600">Leadership</a>
            <a href="careers.html" class="block py-2 text-gray-600">Careers</a>
            <a href="contact.html" class="block py-2 text-gray-600">Contact Us</a>
          </div>
        </div>`;

      

  let footerMenu = `<div class="container mx-auto px-4">
        <div id="footermenu" class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 class="text-lg font-bold mb-4">Solutions</h3>
            <ul class="space-y-2">
              <li><a href="cloud-solutions.html" class="text-gray-300 hover:text-white transition">Cloud Migration</a></li>
              <li><a href="data-analytics.html" class="text-gray-300 hover:text-white transition">Data Analytics</a></li>
              <li><a href="managed-services.html" class="text-gray-300 hover:text-white transition">Managed Services</a></li>  
              <li><a href="digital-workplace.html" class="text-gray-300 hover:text-white transition">Digital Workplace</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">Services</h3>
            <ul class="space-y-2">
              <li><a href="service.html#ITConsulting" class="text-gray-300 hover:text-white transition">IT Consulting</a></li>
              <li><a href="service.html#Implementation" class="text-gray-300 hover:text-white transition">Implementation</a></li>
              <li><a href="service.html#24Support" class="text-gray-300 hover:text-white transition">24/7 Support</a></li>
              <li><a href="service.html#Training" class="text-gray-300 hover:text-white transition">Training</a></li>
            </ul>
          </div>
         
          <div>
            <h3 class="text-lg font-bold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="blog.html" class="text-gray-300 hover:text-white transition">Blog & Insights</a></li>
              <li><a href="case-studies.html" class="text-gray-300 hover:text-white transition">Case Studies</a></li>
              <li><a href="webinars.html" class="text-gray-300 hover:text-white transition">Webinars</a></li>
              <li><a href="whitepapers.html" class="text-gray-300 hover:text-white transition">Whitepapers</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">About</h3>
            <ul class="space-y-2">
              <li><a href="about.html" class="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="about.html#leadership" class="text-gray-300 hover:text-white transition">Leadership</a></li>
              <li><a href="careers.html" class="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="contact.html" class="text-gray-300 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 mt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
                <div class="text-xl font-bold mb-2 md:mb-0">ThinkForm Limited</div>
                <p class="text-gray-400 text-sm">
                  © <span id="currentYear"></span> ThinkForm Limited. All rights reserved.
                </p>
              </div>
            </div>
       
          </div>
        </div>
      </div>`;

      document.getElementById('topMenuList').innerHTML = topMenu;
      document.getElementById('mobileMenuList').innerHTML = mobileMenu;
      document.getElementById('footerMenuList').innerHTML = footerMenu;
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // 初始化菜单
  initMenu();
  // Initialize Lucide icons if available
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  } else {
    console.warn('Lucide icons library not loaded. Icons may not display correctly.');
  }
  
  // Set current year in footer
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
  }
  
  if (closeMenuButton && mobileMenu) {
    closeMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
  }
  
  // Search toggle
  const searchButton = document.getElementById('searchButton');
  const searchBar = document.getElementById('searchBar');
  
  if (searchButton && searchBar) {
    searchButton.addEventListener('click', function() {
      searchBar.classList.toggle('active');
      if (searchBar.classList.contains('active')) {
        const searchInput = searchBar.querySelector('input');
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
  }
  
  // Close mobile menu on window resize (if screen becomes large)
  if (mobileMenu) {
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 1024) { // lg breakpoint
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if it's open
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Dropdown menus for mobile (accordion style)
  const mobileDropdownButtons = document.querySelectorAll('#mobileMenu button');
  
  mobileDropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Check if this button already has a dropdown
      const nextElement = this.nextElementSibling;
      
      if (nextElement && nextElement.classList.contains('mobile-dropdown')) {
        // Toggle existing dropdown
        nextElement.classList.toggle('hidden');
        
        // Toggle icon
        const icon = this.querySelector('[data-lucide="chevron-right"], [data-lucide="chevron-down"]');
        if (icon && typeof lucide !== 'undefined' && lucide.createIcons) {
          if (nextElement.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'chevron-right');
          } else {
            icon.setAttribute('data-lucide', 'chevron-down');
          }
          lucide.createIcons();
        }
      } else {

        /** 
        // Create new dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'mobile-dropdown pl-4 py-2';
        
        // Add some sample links
        dropdown.innerHTML = `
          <a href="#" class="block py-2 text-gray-600">Option 1</a>
          <a href="#" class="block py-2 text-gray-600">Option 2</a>
          <a href="#" class="block py-2 text-gray-600">Option 3</a>
        `;
        
        // Insert after the button
        this.parentNode.insertBefore(dropdown, this.nextSibling);
       
        */
        // Change icon to chevron-down
        const icon = this.querySelector('[data-lucide="chevron-right"]');
        if (icon && typeof lucide !== 'undefined' && lucide.createIcons) {
          icon.setAttribute('data-lucide', 'chevron-down');
          lucide.createIcons();
        }
      }
    });
  });
});


