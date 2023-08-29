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
  <div id="nav-footer"class="nav__footer closed">
  <a class="nav__footer-item" href="https://www.linkedin.com/in/ayeshamathews/" target="inline"><img src='https://uploads-ssl.webflow.com/647b560fa041413036759f33/64ee4b6f3af9c071e5727d8e_linkedin.svg'></img></a>
  <a class="nav__footer-item" href="" target"inline"><img src='https://uploads-ssl.webflow.com/647b560fa041413036759f33/64ee4b6a33fd733bc3c5784b_twitter.svg'></img></a>
  </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
}

function toggleNav() {
    const nav = document.getElementById('nav');
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.getElementById('nav-links');
    const navFooter = document.getElementById('nav-footer');

    if (window.innerWidth <= 479) {
        nav.style.height = '10vh';
    }

    navOpen.addEventListener('click', () => {
        navOpen.classList.add('closed');
        navClose.classList.remove('closed');
        navLinks.classList.remove('closed');
        navFooter.classList.remove('closed');
        nav.style.backgroundColor = '#fff';

        if (window.innerWidth <= 479) {
            nav.style.height = '100vh';
        }
    });

    navClose.addEventListener('click', () => {
        navOpen.classList.remove('closed');
        navClose.classList.add('closed');
        navLinks.classList.add('closed');
        navFooter.classList.add('closed');
        nav.style.backgroundColor = 'transparent';

        if (window.innerWidth <= 479) {
            nav.style.height = '10vh';
        }
    });
}

export default { addNav, toggleNav };