(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-300px');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 90
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

    // Navigation Menu Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const navMenuToggle = document.getElementById('navMenuToggle');
        const navMenu = document.getElementById('navMenu');
        const navMenuItems = document.querySelectorAll('.nav-menu-item');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');

        // Toggle menu
        navMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            navMenuToggle.classList.toggle('active');
            
            // Adjust menu position based on viewport height
            if (navMenu.classList.contains('show')) {
                const menuHeight = navMenu.offsetHeight;
                const viewportHeight = window.innerHeight;
                const menuBottom = navMenu.getBoundingClientRect().bottom;
                
                // If menu would extend beyond viewport, position it above the toggle button
                if (menuBottom > viewportHeight) {
                    navMenu.style.bottom = 'auto';
                    navMenu.style.top = `-${menuHeight + 10}px`;
                } else {
                    navMenu.style.bottom = '0';
                    navMenu.style.top = 'auto';
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !navMenuToggle.contains(event.target)) {
                navMenu.classList.remove('show');
                navMenuToggle.classList.remove('active');
            }
        });

        // Smooth scroll to sections
        navMenuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    navMenu.classList.remove('show');
                    navMenuToggle.classList.remove('active');
                }
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (navMenu.classList.contains('show')) {
                const menuHeight = navMenu.offsetHeight;
                const viewportHeight = window.innerHeight;
                const menuBottom = navMenu.getBoundingClientRect().bottom;
                
                if (menuBottom > viewportHeight) {
                    navMenu.style.bottom = 'auto';
                    navMenu.style.top = `-${menuHeight + 10}px`;
                } else {
                    navMenu.style.bottom = '0';
                    navMenu.style.top = 'auto';
                }
            }
        });
    });

    // Music Player Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const musicPlayerToggle = document.getElementById('musicPlayerToggle');
        const backgroundMusic = document.getElementById('backgroundMusic');
        
        if (musicPlayerToggle && backgroundMusic) {
            musicPlayerToggle.addEventListener('click', function() {
                if (backgroundMusic.paused) {
                    backgroundMusic.play();
                    musicPlayerToggle.classList.add('active');
                } else {
                    backgroundMusic.pause();
                    musicPlayerToggle.classList.remove('active');
                }
            });
            
            // Pause music when page is not visible
            document.addEventListener('visibilitychange', function() {
                if (document.hidden) {
                    backgroundMusic.pause();
                    musicPlayerToggle.classList.remove('active');
                }
            });
        }
    });

})(jQuery);