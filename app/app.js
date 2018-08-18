import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});


  // Hide Header on on scroll down
  var lastScrollTop = 0;

  $(window).scroll(function(event){
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    console.log("last: " + $('nav').outerHeight());
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    console.log(st);
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st > -120 && st < 100){
          $('nav').addClass('own-nav');
        }
        else {
          $('nav').removeClass('own-nav');
        }
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
  });


loadInitializers(App, config.modulePrefix);

export default App;
