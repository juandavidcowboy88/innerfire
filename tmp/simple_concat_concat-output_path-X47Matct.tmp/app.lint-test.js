QUnit.module('ESLint | app');

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'app.js should pass ESLint\n\n16:3 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n16:3 - \'$\' is not defined. (no-undef)\n16:29 - \'event\' is defined but never used. (no-unused-vars)\n18:24 - \'$\' is not defined. (no-undef)\n18:24 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n19:14 - \'$\' is not defined. (no-undef)\n19:14 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n24:5 - Unexpected console statement. (no-console)\n24:28 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n24:28 - \'$\' is not defined. (no-undef)\n27:5 - Unexpected console statement. (no-console)\n30:9 - \'$\' is not defined. (no-undef)\n30:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n34:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n34:11 - \'$\' is not defined. (no-undef)\n37:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n37:11 - \'$\' is not defined. (no-undef)\n39:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n39:17 - \'$\' is not defined. (no-undef)\n39:38 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n39:38 - \'$\' is not defined. (no-undef)\n40:13 - \'$\' is not defined. (no-undef)\n40:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)');
});

QUnit.test('components/post-listing.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/post-listing.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/article.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/article.js should pass ESLint\n\n');
});

QUnit.test('routes/home.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/home.js should pass ESLint\n\n');
});

QUnit.test('routes/index.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/index.js should pass ESLint\n\n');
});

QUnit.test('routes/login.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/login.js should pass ESLint\n\n');
});

QUnit.test('routes/sign-up.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/sign-up.js should pass ESLint\n\n');
});

QUnit.test('routes/topics.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/topics.js should pass ESLint\n\n');
});

