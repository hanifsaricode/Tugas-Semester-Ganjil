// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test ketika kedua argumen adalah bilangan positif
test('sum should return the correct sum when both arguments are positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5, 'sum(2, 3) should return 5');
});

// Test ketika salah satu argumen adalah angka negatif
test('sum should return 0 when one argument is a negative number', () => {
  assert.strictEqual(sum(-1, 5), 0, 'sum(-1, 5) should return 0');
  assert.strictEqual(sum(3, -2), 0, 'sum(3, -2) should return 0');
});

// Test ketika kedua argumen adalah angka negatif
test('sum should return 0 when both arguments are negative numbers', () => {
  assert.strictEqual(sum(-4, -6), 0, 'sum(-4, -6) should return 0');
});

// Test ketika salah satu argumen bukan angka
test('sum should return 0 when one argument is not a number', () => {
  assert.strictEqual(sum('3', 4), 0, 'sum("3", 4) should return 0');
  assert.strictEqual(sum(3, null), 0, 'sum(3, null) should return 0');
  assert.strictEqual(sum(undefined, 3), 0, 'sum(undefined, 3) should return 0');
});

// Test ketika kedua argumen bukan angka
test('sum should return 0 when both arguments are not numbers', () => {
  assert.strictEqual(sum('a', 'b'), 0, 'sum("a", "b") should return 0');
  assert.strictEqual(sum(null, undefined), 0, 'sum(null, undefined) should return 0');
});

// Test ketika kedua argumen adalah 0
test('sum should return 0 when both arguments are zero', () => {
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) should return 0');
});
