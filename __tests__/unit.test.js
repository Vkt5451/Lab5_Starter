// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//PhoneNumber
test('valid phone number with parentheses and space', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number with hyphens only', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber('123-ABC-7890')).toBe(false);
});

test('invalid phone number with incorrect length', () => {
  expect(isPhoneNumber('123-45-6789')).toBe(false);
});


//Emails
test('valid standard email address', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email with underscore in domain', () => {
  expect(isEmail('user@my_domain.com')).toBe(true);
});

test('invalid email missing @ symbol', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email with too long TLD', () => {
  expect(isEmail('test@domain.toolong')).toBe(false);
});


//StrongPassword
test('valid password with 4 characters', () => {
  expect(isStrongPassword('Abc1')).toBe(true);
});

test('valid password with letters, numbers and underscore', () => {
  expect(isStrongPassword('A1_b2_C3d4')).toBe(true);
});

test('invalid password starting with number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('invalid password with special character', () => {
  expect(isStrongPassword('Abc@123')).toBe(false);
});

//Date
test('valid date with single-digit month/day', () => {
  expect(isDate('1/5/2023')).toBe(true);
});

test('valid date with double-digit month/day', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('invalid date with incorrect year format', () => {
  expect(isDate('12/31/23')).toBe(false); // Year needs 4 digits
});

test('invalid date with wrong separators', () => {
  expect(isDate('12-31-2023')).toBe(false); // Uses hyphens instead of slashes
});

//HexColor
test('valid 3-digit hex color with #', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('valid 6-digit hex color without #', () => {
  expect(isHexColor('a1b2c3')).toBe(true);
});

test('invalid hex color with wrong characters', () => {
  expect(isHexColor('#ghijkl')).toBe(false); // Contains g,h,i which are invalid
});

test('invalid hex color with incorrect length', () => {
  expect(isHexColor('#abcd')).toBe(false); // 4 digits is invalid length
});