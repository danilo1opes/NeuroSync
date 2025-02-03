function alertDownload() {
  const alertDownload = document.getElementById('download');
  if (alertDownload) {
    alertDownload.onclick = () => {
      alert('Dowload started successfully');
    };
  }
}

alertDownload();

function menuHambuger() {
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuIconOpen = document.querySelector('.icon-open');
    const menuIconClose = document.querySelector('.icon-close');
    const menuIcons = document.querySelector('.menu-icons');
    const buttonHeader = document.querySelector('.btt-header');

    menuIcons.addEventListener('click', () => {
      const isActive = navLinks.classList.toggle('active');

      menuIconOpen.style.display = isActive ? 'none' : 'block';
      menuIconClose.style.display = isActive ? 'block' : 'none';

      navLinks.style.left = isActive ? '0' : '-100%';
      buttonHeader.style.display = isActive ? 'block' : 'none';
    });

    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIconOpen.style.display = 'block';
        menuIconClose.style.display = 'none';
        navLinks.style.left = '-100%';
        buttonHeader.style.display = 'none';
      });
    });
  });
}

menuHambuger();
