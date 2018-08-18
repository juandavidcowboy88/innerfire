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

    $(function () {

        var $sidebar = $("#sidebar"),
            $window = $(window),
            offset = $sidebar.offset(),
            topPadding = 15;

        $window.scroll(function () {

            if ($(".navbar").offset().top > 50) {
                $('#custom-nav').addClass('affix');
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $('#custom-nav').removeClass('affix');
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
    });

    (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

    exports.default = App;
});