define('test-app/app', ['exports', 'test-app/resolver', 'ember-load-initializers', 'test-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  // $(function() {
  //
  //     var $sidebar   = $("#sidebar"),
  //         $window    = $(window),
  //         offset     = $sidebar.offset(),
  //         topPadding = 15;
  //
  //     $window.scroll(function() {
  //
  //         if ($(".navbar").offset().top > 50) {
  //             $('#custom-nav').removeClass('hidden');
  //             $(".navbar-fixed-top").removeClass("top-nav-collapse");
  //         } else {
  //             $('#custom-nav').addClass('hidden');
  //             $(".navbar-fixed-top").addClass("top-nav-collapse");
  //         }
  //     });
  //
  // });

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;

  $(window).scroll(function (event) {
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;
    console.log("last: " + $('nav').outerHeight());
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st > 0 && st < 120) {
        $('nav').addClass('own-nav');
      } else {
        $('nav').removeClass('own-nav');
      }
      if (st + $(window).height() < $(document).height()) {
        $('nav').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});