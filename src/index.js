import './main.css';
import carouselAnimation from './app/carousel';
import showContent from './app/impact';
import addStylesheet from './app/styles';
import whiteSquare from './app/whiteSquare';
import nav from './app/nav';

document.addEventListener('DOMContentLoaded', function() {
    whiteSquare();
    nav.addNav();
    nav.toggleNav();
    addStylesheet();

    const page = window.location.pathname;
  
    if (page === '/') {
        carouselAnimation();
    } else if (page === '/impact') {
        showContent();
    }
  });