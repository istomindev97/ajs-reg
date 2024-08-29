import Validator from '../app';

const validator = new Validator();

test('username with digits at the start', () => {
  expect(validator.validateUsername('123username')).toBe(false);
});

test('username with digits at the end', () => {
  expect(validator.validateUsername('username123')).toBe(false);
});

test('username with more than three digits in a row', () => {
  expect(validator.validateUsername('user1234name')).toBe(false);
});

test('username with only valid characters', () => {
  expect(validator.validateUsername('valid_user-name')).toBe(true);
});

test('username with invalid characters', () => {
  expect(validator.validateUsername('invalid$user')).toBe(false);
});

test('username with underscores or hyphens at the start', () => {
  expect(validator.validateUsername('-username')).toBe(false);
  expect(validator.validateUsername('_username')).toBe(false);
});

test('username with underscores or hyphens at the end', () => {
  expect(validator.validateUsername('username-')).toBe(false);
  expect(validator.validateUsername('username_')).toBe(false);
});

test('username with underscores or hyphens inside', () => {
  expect(validator.validateUsername('user_name')).toBe(true);
  expect(validator.validateUsername('user-name')).toBe(true);
});
