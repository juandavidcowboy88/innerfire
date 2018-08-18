QUnit.module('ESLint | app');

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'app.js should pass ESLint\n\n12:1 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n12:1 - \'$\' is not defined. (no-undef)\n14:22 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n14:22 - \'$\' is not defined. (no-undef)\n15:22 - \'$\' is not defined. (no-undef)\n15:22 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n16:9 - \'offset\' is assigned a value but never used. (no-unused-vars)\n17:9 - \'topPadding\' is assigned a value but never used. (no-unused-vars)\n21:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n21:13 - \'$\' is not defined. (no-undef)\n22:13 - \'$\' is not defined. (no-undef)\n22:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n23:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n23:13 - \'$\' is not defined. (no-undef)\n25:13 - \'$\' is not defined. (no-undef)\n25:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n26:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n26:13 - \'$\' is not defined. (no-undef)');
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

