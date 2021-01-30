import anime from 'animejs'; 

let customRAF;

function animate() {
  const path1 = anime.path('.path1');
  const path2 = anime.path('.path2');
  const path3 = anime.path('.path3');
  const path4 = anime.path('.path4');
  const path5 = anime.path('.path5');
  const path6 = anime.path('.path6');
  const path7 = anime.path('.path7');
  const path8 = anime.path('.path8');
  const planets = document.querySelectorAll('.planet');
    
  //* Modifies the index of the planets
  function changeZIndex(time, planetPosition) {
    setTimeout(() => {
      planets[planetPosition].classList.toggle(`layer${planetPosition + 1}`);
    }, time);
  }

  //* Animates the targeted planet, its the same for the 8 planets
  const planet1 = anime({
    targets: '.planet1',
    translateX: path1('x'),
    translateY: path1('y'),
    easing: 'linear',
    duration: 7000,
    loop: true,
    //* At the middle of the animation changes the planet z-index
    //TODO: change the time for % of the path completed
    loopBegin: () => changeZIndex(3500, 0),
    loopComplete: () => changeZIndex(0, 0),
    autoplay: false,
  });

  const planet2 = anime({
    targets: '.planet2',
    translateX: path2('x'),
    translateY: path2('y'),
    easing: 'linear',
    duration: 14000,
    loop: true,
    loopBegin: () => changeZIndex(7000, 1),
    loopComplete: () => changeZIndex(0, 1),
    autoplay: false,
  });
  
  const planet3 = anime({
    targets: '.planet3',
    translateX: path3('x'),
    translateY: path3('y'),
    easing: 'linear',
    duration: 22000,
    loop: true,
    loopBegin: () => changeZIndex(11000, 2),
    loopComplete: () => changeZIndex(0, 2),
    autoplay: false,
  });
  
  const planet4 = anime({
    targets: '.planet4',
    translateX: path4('x'),
    translateY: path4('y'),
    easing: 'linear',
    duration: 31000,
    loop: true,
    loopBegin: () => changeZIndex(15500, 3),
    loopComplete: () => changeZIndex(0, 3),
    autoplay: false,
  });
  
  const planet5 = anime({
    targets: '.planet5',
    translateX: path5('x'),
    translateY: path5('y'),
    easing: 'linear',
    duration: 41000,
    loop: true,
    loopBegin: () => changeZIndex(20500, 4),
    loopComplete: () => changeZIndex(0, 4),
    autoplay: false,
  });
  
  const planet6 = anime({
    targets: '.planet6',
    translateX: path6('x'),
    translateY: path6('y'),
    easing: 'linear',
    duration: 52000,
    loop: true,
    loopBegin: () => changeZIndex(26000, 5),
    loopComplete: () => changeZIndex(0, 5),
    autoplay: false,
  });
  
  const planet7 = anime({
    targets: '.planet7',
    translateX: path7('x'),
    translateY: path7('y'),
    easing: 'linear',
    duration: 64000,
    loop: true,
    loopBegin: () => changeZIndex(32000, 6),
    loopComplete: () => changeZIndex(0, 6),
    autoplay: false,
  });
  
  const planet8 = anime({
    targets: '.planet8',
    translateX: path8('x'),
    translateY: path8('y'),
    easing: 'linear',
    duration: 77000,
    loop: true,
    loopBegin: () => changeZIndex(38500, 7),
    loopComplete: () => changeZIndex(0, 7),
    autoplay: false,
  });

  cancelAnimationFrame(customRAF);
  function loop(t) {
    planet1.tick(t);
    planet2.tick(t);
    planet3.tick(t);
    planet4.tick(t);
    planet5.tick(t);
    planet6.tick(t);
    planet7.tick(t);
    planet8.tick(t);
    customRAF = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

export default animate;