import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Test case untuk pengujian sum
test('sum should return the correct sum of two numbers', () => {
  assert.strictEqual(sum(2, 3), 5);  // Menguji apakah 2 + 3 = 5
  assert.strictEqual(sum(0, 0), 0);  // Menguji apakah 0 + 0 = 0
  assert.strictEqual(sum(-1, 1), 0);  // Menguji apakah -1 + 1 = 0
  assert.strictEqual(sum(-1, -1), -2);  // Menguji apakah -1 + -1 = -2
});

// Test case untuk pengujian validasi input
test('sum should return concatenated strings if any of the arguments is not a number', () => {
  assert.strictEqual(sum('a', 3), 'a3');  // Menguji apakah input string 'a' dan angka 3 menghasilkan 'a3'
  assert.strictEqual(sum(2, 'b'), '2b');  // Menguji apakah angka 2 dan string 'b' menghasilkan '2b'
  assert.strictEqual(sum('a', 'b'), 'ab');  // Menguji apakah dua string 'a' dan 'b' menghasilkan 'ab'
});

test('sum should return the sum of two numbers, even if one is negative', () => {
  assert.strictEqual(sum(-1, 5), 4);  // Menguji apakah -1 + 5 = 4
});
