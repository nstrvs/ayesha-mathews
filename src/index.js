import './main.css';
import carouselAnimation from './app/carousel';
import toggleNav from './app/nav';
import showContent from './app/impact';
import addStylesheet from './app/styles';
import whiteSquare from './app/whiteSquare';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { addNav, toggleNav } from './app/nav';

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch();

document.addEventListener('DOMContentLoaded', function() {
    addStylesheet();
    whiteSquare();
    addNav();
    toggleNav();
    library.add(faStroopwafel);
    const page = window.location.pathname;
  
    if (page === '/') {
        carouselAnimation();
    } else if (page === '/impact') {
        showContent();
    }
  });