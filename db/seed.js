import { User } from '../dist';

export default async function seed(trx) {
  await User.transacting(trx).create({
    name: 'johnny',
    email: 'johnny.doe@example.com',
    password: 'pass1234'
  });
}

