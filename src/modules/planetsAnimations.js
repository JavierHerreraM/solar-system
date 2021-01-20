import anime from 'animejs'; 

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
    anime({
      targets: '.planet1',
      translateX: path1('x'),
      translateY: path1('y'),
      easing: 'linear',
      duration: 5000,
      loop: true,
    
      //* At the middle of the animation changes the planet z-index
      //TODO: change the time for % of the path completed
      loopBegin: function() {
        changeZIndex(2500, 0);
      },
      loopComplete: function() {
        changeZIndex(0, 0);
      },
    
      autoplay: true,
    });
    
    anime({
      targets: '.planet2',
      translateX: path2('x'),
      translateY: path2('y'),
      easing: 'linear',
      duration: 11000,
      loop: true,
    
      loopBegin: function() {
        changeZIndex(5500, 1);
      },
      loopComplete: function() {
        changeZIndex(0, 1);
      },
    
      autoplay: true,
    });
    
    anime({
      targets: '.planet3',
      translateX: path3('x'),
      translateY: path3('y'),
      easing: 'linear',
      duration: 18000,
      loop: true,
    
      loopBegin: function() {
        changeZIndex(9000, 2);
      },
      loopComplete: function() {
        changeZIndex(0, 2);
      },
    
      autoplay: true,
    });
    
    anime({
      targets: '.planet4',
      translateX: path4('x'),
      translateY: path4('y'),
      easing: 'linear',
      duration: 26000,
      loop: true,
    
      loopBegin: function() {
        changeZIndex(13000, 3);
      },
      loopComplete: function() {
        changeZIndex(0, 3);
      },
    
      autoplay: true,
    });
    
    anime({
      targets: '.planet5',
      translateX: path5('x'),
      translateY: path5('y'),
      easing: 'linear',
      duration: 35000,
      loop: true,
    
      loopBegin: function() {
        changeZIndex(17500, 4);
      },
      loopComplete: function() {
        changeZIndex(0, 4);
      },
    
      autoplay: true,
    });
    
    anime({
      targets: '.planet6',
      translateX: path6('x'),
      translateY: path6('y'),
      easing: 'linear',
      duration: 45000,
      loop: true,
    
      loopBegin: function() {
        changeZIndex(22500, 5);
      },
      loopComplete: function() {
        changeZIndex(0, 5);
      },
    
      autoplay: true,
    });
    
    anime({
      targets: '.planet7',
      translateX: path7('x'),
      translateY: path7('y'),
      easing: 'linear',
      duration: 56000,
      loop: true,
    
      loopBegin: function() {
        changeZIndex(28000, 6);
      },
      loopComplete: function() {
        changeZIndex(0, 6);
      },
    
      autoplay: true,
    });
    
    anime({
      targets: '.planet8',
      translateX: path8('x'),
      translateY: path8('y'),
      easing: 'linear',
      duration: 68000,
      loop: true,
    
      loopBegin: function() {
        changeZIndex(34000, 7);
      },
      loopComplete: function() {
        changeZIndex(0, 7);
      },
    
      autoplay: true,
    });
}

export default animate;