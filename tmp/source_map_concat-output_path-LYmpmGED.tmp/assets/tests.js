'use strict';

define('test-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass ESLint\n\n33:7 - \'didScroll\' is defined but never used. (no-unused-vars)\n36:3 - \'$\' is not defined. (no-undef)\n36:3 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n36:29 - \'event\' is defined but never used. (no-unused-vars)\n38:24 - \'$\' is not defined. (no-undef)\n38:24 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n39:14 - \'$\' is not defined. (no-undef)\n39:14 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n44:5 - Unexpected console statement. (no-console)\n44:28 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n44:28 - \'$\' is not defined. (no-undef)\n49:9 - \'$\' is not defined. (no-undef)\n49:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n53:11 - \'$\' is not defined. (no-undef)\n53:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n56:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n56:11 - \'$\' is not defined. (no-undef)\n58:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n58:17 - \'$\' is not defined. (no-undef)\n58:38 - \'$\' is not defined. (no-undef)\n58:38 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n59:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n59:13 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/post-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/post-listing.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/article.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/article.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/sign-up.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sign-up.js should pass ESLint\n\n');
  });

  QUnit.test('routes/topics.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/topics.js should pass ESLint\n\n');
  });
});
define('test-app/tests/integration/components/post-listing-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | post-listing', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "nqYLsTNR",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"post-listing\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/5nCWe6w",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"post-listing\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('test-app/tests/test-helper', ['test-app/app', 'test-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('test-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/post-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/post-listing-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sign-up-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-up-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/topics-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/topics-test.js should pass ESLint\n\n');
  });
});
define('test-app/tests/unit/routes/article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:article');
      assert.ok(route);
    });
  });
});
define('test-app/tests/unit/routes/home-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define('test-app/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('test-app/tests/unit/routes/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define('test-app/tests/unit/routes/sign-up-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | sign-Up', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:sign-up');
      assert.ok(route);
    });
  });
});
define('test-app/tests/unit/routes/topics-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | topics', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:topics');
      assert.ok(route);
    });
  });
});
define('test-app/config/environment', [], function() {
  var prefix = 'test-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('test-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
