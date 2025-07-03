$(document).ready(function() {
    function toggleTheme() {
        const body = $('body');
        const button = $('.theme-toggle');
        const cards = $('.project-card');
        
        if (body.hasClass('light-mode')) {
            body.removeClass('light-mode').addClass('dark-mode');
            cards.removeClass('project-card').addClass('project-card-dark')
            button.text('Modo Claro');
        } else {
            body.removeClass('dark-mode').addClass('light-mode');
            cards.removeClass('project-card-dark').addClass('project-card')
            button.text('Modo Noturno');
        }
    }



    $('.theme-toggle').on('click', toggleTheme);

    $('nav a').on('click', function(e) {
        e.preventDefault();
        const sectionId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top
        }, 800);
    });

    $(window).scroll(function() {
        $('.section').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + 500) {
                $(this).addClass('fade-in');
            }
        });
    });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-mobile").classList.toggle("active");
});

function scrollProjects(direction) {
    const container = document.getElementById('projects');
    const scrollAmount = 300;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// A partir daqui é o efeito das partículas
const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.speedY = Math.random() * 2.5 + 1.5;
      this.alpha = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.y += this.speedY;
      if (this.y > canvas.height) this.reset();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(5, 173, 212, ${this.alpha})`;
      ctx.fill();
    }
  }

  const particles = [];
  const numParticles = 100;

  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });