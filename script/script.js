// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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