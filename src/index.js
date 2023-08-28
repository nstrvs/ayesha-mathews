import './main.css';
import carouselAnimation from './app/carousel';
import showContent from './app/impact';
import addStylesheet from './app/styles';
import whiteSquare from './app/whiteSquare';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { addNav, toggleNav } from './app/nav';

document.addEventListener('DOMContentLoaded', function() {
    whiteSquare();
    addNav();
    toggleNav();
    addStylesheet();
    dom.watch();
    
    library.add(faStroopwafel);
    const page = window.location.pathname;
  
    if (page === '/') {
        carouselAnimation();
    } else if (page === '/impact') {
        showContent();
    }
  });