$(document).ready(function() {
    // Toggle Theme
    function toggleTheme() {
        const body = $('body');
        const button = $('.theme-toggle');
        
        if (body.hasClass('light-mode')) {
            body.removeClass('light-mode').addClass('dark-mode');
            button.text('Modo Claro');
        } else {
            body.removeClass('dark-mode').addClass('light-mode');
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