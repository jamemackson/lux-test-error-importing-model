import { User } from '../../dist/bundle';

import {
  default as toPojo
} from './model-to-pojo';

test('module exports functions', () => {
  expect(typeof toPojo === 'function').toBeTruthy();
});

test('can convert 1 model', async () => {
  const userData = {
    name: 'jame',
    email: 'jame@example.com',
    password: 'abc123'
  };
  const user = await User.create(userData);
  const fields = ['name', 'email'];
  console.log('attrs', user.constructor.attributeNames);

  const data = user.getAttributes('name', 'email');
  // const data = toPojo(user, fields);
  console.log('data is: ', data);

  expect(data).toMatchObject(userData);
});
