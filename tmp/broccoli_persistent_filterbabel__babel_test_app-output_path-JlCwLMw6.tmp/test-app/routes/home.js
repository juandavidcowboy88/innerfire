define('test-app/routes/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return [{
        id: 'post-one',
        title: 'Don’t Worry About Job Burn-Out. Worry About Job Boredom',
        owner: 'ADAM RILEY',
        image: '../assets/images/imgPost.png'
      }, {
        id: 'post-two',
        title: 'How To Be Happy: A Scientific Perspective',
        owner: 'SEBASTIEN BRUNET',
        image: '../assets/images/imgPost2.png'
      }, {
        id: 'post-three',
        title: 'To Everyone Who Feels Behind: Your Work Matters',
        owner: 'ASHLEY PATTERN',
        image: '../assets/images/imgPost3.png'
      }, {
        id: 'post-four',
        title: 'To Everyone Who Feels Behind: Your Work Matters',
        owner: 'Violet Beauregarde',
        image: '../assets/images/imPost4.png'
      }];
    }
  });
});