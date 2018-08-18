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