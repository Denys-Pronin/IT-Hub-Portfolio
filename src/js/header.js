 
  const toggleSwitches = document.querySelectorAll('.toggle-switch [type="checkbox"]');

  toggleSwitches.forEach(toggle => {
    toggle.addEventListener('change', function() {
      if (this.checked) {
        console.log('Dark theme');
        document.body.classList.add('dark');
      } else {
        console.log('Light theme');
        document.body.classList.remove('dark');
      }

    toggleSwitches.forEach(otherToggle => {
        if (otherToggle !== this) {
          otherToggle.checked = this.checked;
        }
      });
    });
  });

   
  const openMenuBtn = document.querySelector('.header-open-menu-btn');
  const closeMenuBtn = document.querySelector('.menu-close-btn');
  const mobMenu = document.querySelector('.mob-menu');
  const navItems = document.querySelectorAll('.mob-nav-list .header-list-item');

  function toggleMenu(open) {
    if (open) {
      mobMenu.classList.add('open');
      openMenuBtn.style.display = 'none';
      closeMenuBtn.style.display = 'block';
    } else {
      mobMenu.classList.remove('open');
      openMenuBtn.style.display = 'block';
      closeMenuBtn.style.display = 'none';
    }
  }

  openMenuBtn.addEventListener('click', function() {
    toggleMenu(true);
  });

  closeMenuBtn.addEventListener('click', function() {
    toggleMenu(false);
  });

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      toggleMenu(false);
    });
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      mobMenu.classList.remove('open');
      openMenuBtn.style.display = 'none';
      closeMenuBtn.style.display = 'none';
    } else {
      openMenuBtn.style.display = 'block';
    }
  });

  if (window.innerWidth >= 768) {
    openMenuBtn.style.display = 'none';
  }


