const app = {
  init: () => {
    // Change nav links as active based on which slide is in viewport (0.55 threshold)
    const changeNav = (entries, observer) => {
      entries.forEach((entry) => {
        // verify the element is intersecting
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          // remove old active class
          document.querySelector(".active").classList.remove("active");
          // get id of the intersecting section
          var id = entry.target.getAttribute("id");
          // find matching link & add appropriate class
          document.querySelector(`[href="#${id}"]`).classList.add("active");
        }
      });
    };

    const gamesSlideIn = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          document.querySelector(".gamesGrid img").classList.add("slideInleft");
        }
      });
    };

    const stepsSlideIn = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          document.querySelector(".steps").classList.add("animate");
        }
      });
    };

    // init the observer
    const options = {
      threshold: 0.55,
    };

    const observer = new IntersectionObserver(changeNav, options);
    const observer2 = new IntersectionObserver(gamesSlideIn, options);
    const observer3 = new IntersectionObserver(stepsSlideIn, options);

    // target the elements to be observed
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    const gamesGridImg = document.querySelector("#slide-three");
    observer2.observe(gamesGridImg);

    const steps = document.querySelector(".steps");
    observer3.observe(steps);
  },
};

app.init(); // Initialise

/**************************************************
 *
 * PARTICLES JS
 *
 **************************************************/
tsParticles.load("tsparticles", {
  autoPlay: true,
  backgroundMask: {
    composite: "destination-out",
    cover: { color: { value: "#fff" }, opacity: 1 },
    enable: false,
  },
  fullScreen: { enable: true, zIndex: 1 },
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: { enable: true, mode: "repulse" },
      onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: { enable: false, force: 2, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: { distance: 200 },
      bubble: {
        distance: 250,
        duration: 2,
        mix: false,
        opacity: 0,
        size: 0,
        divs: { distance: 200, duration: 0.4, mix: false, selectors: [] },
      },
      connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
      grab: {
        distance: 400,
        links: { blink: false, consent: false, opacity: 1 },
      },
      light: {
        area: {
          gradient: { start: { value: "#ffffff" }, stop: { value: "#000000" } },
          radius: 1000,
        },
        shadow: { color: { value: "#000000" }, length: 2000 },
      },
      push: { default: true, groups: [], quantity: 4 },
      remove: { quantity: 2 },
      repulse: {
        distance: 400,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      slow: { factor: 3, radius: 200 },
      trail: { delay: 1, pauseOnStop: false, quantity: 1 },
    },
  },
  manualParticles: [],
  motion: { disable: false, reduce: { factor: 4, value: true } },
  particles: {
    bounce: {
      horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
    },
    collisions: {
      bounce: {
        horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
        vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      },
      enable: false,
      mode: "bounce",
      overlap: { enable: true, retries: 0 },
    },
    color: {
      value: "#ffffff",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
      },
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: { random: { enable: false, minimumValue: 0 }, value: 3 },
        rate: {
          random: { enable: false, minimumValue: 0 },
          value: { min: 4, max: 9 },
        },
        sizeOffset: true,
      },
    },
    gradient: [],
    groups: {},
    links: {
      blink: false,
      color: { value: "#ffffff" },
      consent: false,
      distance: 150,
      enable: false,
      frequency: 1,
      opacity: 0.4,
      shadow: { blur: 5, color: { value: "#000" }, enable: false },
      triangles: { enable: false, frequency: 1 },
      width: 1,
      warp: false,
    },
    move: {
      angle: { offset: 0, value: 90 },
      attract: { distance: 200, enable: false, rotate: { x: 600, y: 600 } },
      center: { x: 50, y: 50, radius: 0 },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: true,
      size: false,
      speed: 1,
      spin: { acceleration: 0, enable: false },
      straight: false,
      trail: { enable: false, length: 10, fillColor: { value: "#000000" } },
      vibrate: false,
      warp: false,
    },
    number: {
      density: { enable: true, area: 800, factor: 1000 },
      limit: 0,
      value: 160,
    },
    opacity: {
      random: { enable: true, minimumValue: 0.1 },
      value: { min: 0, max: 1 },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0,
      },
    },
    reduceDuplicates: false,
    repulse: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
    rotate: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      animation: { enable: false, speed: 0, decay: 0, sync: false },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: { value: "#000" },
      enable: false,
      offset: { x: 0, y: 0 },
    },
    shape: { options: {}, type: "circle" },
    size: {
      random: { enable: true, minimumValue: 1 },
      value: { min: 1, max: 3 },
      animation: {
        count: 0,
        enable: false,
        speed: 4,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.3,
      },
    },
    stroke: { width: 0 },
    zIndex: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  style: {},
  themes: [],
  zLayers: 100,
});
