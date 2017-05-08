import User from '../models/user';

import {
  default as modelToPojo
} from './modelsToPojo';

test('module exports functions', () => {
  expect(typeof modelToPojo === 'function').toBeTruthy();
});

test('can convert 1 model', () => {
  const userData = {
    firstName: 'jame',
    lastName: 'mackson'
  };
  const user = User.create(userData);

  expect(modelToPojo(user)).toMatchObject(userData);
});
