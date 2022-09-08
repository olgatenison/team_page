"use  strict";

window.onload = function () {
  const parallax = document.querySelector(".parallax");
  if (parallax) {
    const clouds = document.querySelector(".images-parallax__clouds");
    const fourthplan = document.querySelector(".images-parallax__fourthplan");
    const thirdplan = document.querySelector(".images-parallax__thirdplan");
    const secondplan = document.querySelector(".images-parallax__secondplan");
    const firstplan = document.querySelector(".images-parallax__firstplan");

    const forClouds = 40;
    const forFour = 30;
    const forThird = 20;
    const forSecond = 15;
    const forFirst = 10;

    const speed = 0.05;

    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${
        positionY / forClouds
      }%);`;

      fourthplan.style.cssText = `transform: translate(${
        positionX / forFour
      }%, ${positionY / forFour}%);`;

      thirdplan.style.cssText = `transform: translate(${
        positionX / forThird
      }%, ${positionY / forThird}%);`;

      secondplan.style.cssText = `transform: translate(${
        positionX / forSecond
      }%, ${positionY / forSecond}%);`;

      firstplan.style.cssText = `transform: translate(${
        positionX / forFirst
      }%, ${positionY / forFirst}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });
  }
};
