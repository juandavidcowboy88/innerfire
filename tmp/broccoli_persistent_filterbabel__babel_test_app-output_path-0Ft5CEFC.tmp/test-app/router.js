define('test-app/router', ['exports', 'test-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('sign-up');
    this.route('login');
    this.route('home');
    this.route('topics');
    this.route('article');
  });

  exports.default = Router;
});