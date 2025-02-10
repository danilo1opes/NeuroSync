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

function scrollSmooth() {
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListemer('click', (e) => {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
}
//caso seja criado uma nova pagina, um efeito de rolagem suave vai melhorar a experiência do usuário.
scrollSmooth();

const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = 'Dark Mode';

// toogleDarkMode.addEventListemer('click', () => {
//   document.body.classList.toggle('dark-mode');
//   localStorage.setItem(
//     'theme',
//     document.body.classList.contains('dark-mode') ? 'dark' : 'light'
//   );

//   if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark-mode');
//   }
// });

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.classList.add('notification');
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);

  document.getElementById('dowload').addEventListener('click', () => {
    showNotification('Download started successfully');
  });
}
