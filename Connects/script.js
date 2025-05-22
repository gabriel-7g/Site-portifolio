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
    document.getElementById("menu-nav").classList.toggle("active");
}); 

function scrollProjects(direction) {
    const container = document.getElementById('projects');
    const scrollAmount = 300;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}