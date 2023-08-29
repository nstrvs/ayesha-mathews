function addNav() {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'nav');
  nav.setAttribute('class', 'nav');
  nav.innerHTML = ` 
  <div id="nav-open" class="nav__icon"><img src='../shared/open.svg'></img></div>
  <div id="nav-close" class="nav__icon closed"><img src='../shared/close.svg'></img></i></div>
  <ul id="nav-links" class="nav__links closed">
      <li class="Text Block"><a href="/">Home</a></li>
      <li class="Text Block"><a href="/about">About</a></li>
      <li class="Text Block"><a href="/terrain">Terrain</a></li>
      <li class="Text Block"><a href="/impact">Impact</a></li>
  </ul>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
}

function toggleNav() {
   const nav = document.getElementById('nav');
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.getElementById('nav-links');

    navOpen.addEventListener('click', () => {
        navOpen.classList.add('closed');
        navClose.classList.remove('closed');
        navLinks.classList.remove('closed');
        nav.style.backgroundColor = '#fff';
    });

    navClose.addEventListener('click', () => {
        navOpen.classList.remove('closed');
        navClose.classList.add('closed');
        navLinks.classList.add('closed');
        nav.style.backgroundColor = 'transparent';
    });
}
  
export default { addNav, toggleNav };