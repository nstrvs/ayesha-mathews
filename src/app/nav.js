function addNav() {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'nav');
  nav.setAttribute('class', 'nav');
  nav.innerHTML = ` 
  <div id="nav-open" class="nav__icon"><img src='https://uploads-ssl.webflow.com/647b560fa041413036759f33/64ee14abdc2549f5365efbfe_open.svg'></img></div>
  <div id="nav-close" class="nav__icon closed"><img src='https://uploads-ssl.webflow.com/647b560fa041413036759f33/64ee14a75554e5868f0506d3_close.svg'></img></div>
  <ul id="nav-links" class="nav__wrapper closed">
      <li><a class="nav__item" href="/">Home</a></li>
      <li><a class="nav__item" href="/about">About</a></li>
      <li><a class="nav__item" href="/terrain">Terrain</a></li>
      <li><a class="nav__item" href="/impact">Impact</a></li>
  </ul>
  <div class="nav__icons-wrapper">
  <a class="nav__icon is-small" href="https://www.linkedin.com/in/ayeshamathews/" target="inline"><img src='https://uploads-ssl.webflow.com/647b560fa041413036759f33/64ee4206393eb5afde4a8263_twitter.svg'></img></a>
  <a class="nav__icon is-small" href="" target"inline"><img src='https://uploads-ssl.webflow.com/647b560fa041413036759f33/64ee420a1b07b9e11d8126bf_linkedin.svg'></img></a>
  </div>
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