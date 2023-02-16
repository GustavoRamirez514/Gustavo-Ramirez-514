window.addEventListener('load', function() {
    const themeToggleButton = document.querySelector('.theme-toggle-button');
    const body = document.body;
  
    themeToggleButton.addEventListener('click', function() {
      body.classList.toggle('ligth-theme');
    });
  });
  