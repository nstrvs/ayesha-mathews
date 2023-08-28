import './main.css';
import carouselAnimation from './app/carousel';
import toggleNav from './app/nav';
import showContent from './app/impact';


document.addEventListener('DOMContentLoaded', function() {
    toggleNav();
    const page = window.location.pathname;
  
    if (page === '/') {
        carouselAnimation();
    } else if (page === '/impact') {
        showContent();
    }
  });