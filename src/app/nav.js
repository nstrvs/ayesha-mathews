function toggleNav() {
    let navOpen = document.getElementById('nav-open');
    let navClose = document.getElementById('nav-close');
    let openButton = document.getElementById('open-button');
    let closeButton = document.getElementById('close-button');
  
    // When nav-open is clicked, hide it and show nav-close
    openButton.addEventListener('click', function() {
      navOpen.classList.toggle('closed');
      navClose.classList.toggle('closed');
    });
  
    // When nav-close is clicked, hide it and show nav-open
    closeButton.addEventListener('click', function() {
      navOpen.classList.toggle('closed');
      navClose.classList.toggle('closed');
    });
  }
  
  export default toggleNav;