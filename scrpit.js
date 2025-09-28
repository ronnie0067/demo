// Simple fade-in animation on scroll for event cards
document.addEventListener("DOMContentLoaded", function() {
    const eventCards = document.querySelectorAll('.event-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    eventCards.forEach(card => {
        card.style.opacity = '0'; // Initially hide the cards
        observer.observe(card);
    });
});

// Add the CSS for the animation to your style.css or here in a style tag
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(style);


// --- Particles.js Initialization ---
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, // Number of particles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // Color of particles
    },
    "shape": {
      "type": "circle", // Shape of particles (circle, edge, triangle, polygon, star, image)
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5, // Opacity of particles
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, // Size of particles
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true, // Connect particles with lines
      "distance": 150, // Distance for lines to appear
      "color": "#ffffff", // Color of lines
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, // Speed of particle movement
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true, // Particles react on hover
        "mode": "grab" // Mode on hover (grab, bubble, repulse)
      },
      "onclick": {
        "enable": true, // Particles react on click
        "mode": "push" // Mode on click (push, remove, bubble, repulse)
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});