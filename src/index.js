import './main.css';
import carouselAnimation from './app/carousel';
import toggleNav from './app/nav';
import showContent from './app/impact';
import addStylesheet from './app/styles';


document.addEventListener('DOMContentLoaded', function() {
    addStylesheet();
    toggleNav();
    const page = window.location.pathname;
  
    if (page === '/') {
        carouselAnimation();
    } else if (page === '/impact') {
        showContent();
    }
  });