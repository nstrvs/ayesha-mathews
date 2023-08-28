import './main.css';
import carouselAnimation from './app/carousel';
import toggleNav from './app/nav';
import showContent from './app/impact';
import addStylesheet from './app/styles';
import whiteSquare from './app/whiteSquare';

document.addEventListener('DOMContentLoaded', function() {
    addStylesheet();
    whiteSquare();
    toggleNav();
    const page = window.location.pathname;
  
    if (page === '/') {
        carouselAnimation();
    } else if (page === '/impact') {
        showContent();
    }
  });