import gsap from "gsap";

function carouselAnimation() {
    const carousel = document.querySelector("#carousel");
    const carouselTwo = document.querySelector("#carousel-two");
  
    let position = carouselTwo.getBoundingClientRect().left;
  
    gsap.to(carousel, {
      x: -position,
      duration: 30,
      ease: "none",
      repeat: -1
    });
  }
  
  export default carouselAnimation;