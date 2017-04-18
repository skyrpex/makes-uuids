import test from 'ava';
import makesUuids from './dist/makes-uuids.cjs';

test('creates a mixin with the UUID method', (t) => {
  const mixin = makesUuids({
    methodName: 'uuid',
  });

  t.true(typeof mixin.methods.uuid === 'function');
});

test('makes uuids', (t) => {
  const mixin = makesUuids({
    methodName: 'uuid',
  });

  t.true(typeof mixin.methods.uuid('test') === 'string');
});

test('makes equal uuids for the same key', (t) => {
  const mixin = makesUuids({
    methodName: 'uuid',
  });

  t.true(mixin.methods.uuid('test') === mixin.methods.uuid('test'));
});

test('makes different uuids for different keys', (t) => {
  const mixin = makesUuids({
    methodName: 'uuid',
  });

  t.true(mixin.methods.uuid('test 1') !== mixin.methods.uuid('test 2'));
});

test('uses uuid as the default method name', (t) => {
  const mixin = makesUuids();

  t.true(typeof mixin.methods.uuid === 'function');
});
