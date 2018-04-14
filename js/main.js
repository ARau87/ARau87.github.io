'use strict';

// Toggle mobile nav when clicking on the burger button
const toggleMenu = () => {

  const classes = $('.mobile-nav').attr('class').split(/\s+/);

  classes.indexOf('mobile-nav--hidden') > 0 ? 
                                              $('.mobile-nav').removeClass('mobile-nav--hidden') 
                                              : 
                                              $('.mobile-nav').addClass('mobile-nav--hidden');

}

// Creating a fixed nav when scrolling down
const fixNavbar = (event) => {

  $(document).scrollTop() > 50 ?
                            $('.nav-wrapper').addClass('nav-wrapper--fixed')
                            :
                            $('.nav-wrapper').removeClass('nav-wrapper--fixed');


};


// Adding listeners to page elements
$('.burger-wrapper').click(toggleMenu);
$('.mobile-nav .nav-list').click(toggleMenu);

$(document).scroll(fixNavbar);

