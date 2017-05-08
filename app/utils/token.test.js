import { getNewToken } from './token';

const tokenData = { name: 'johnny doe' };

describe('test token utility', () => {
  test('can generate a new token', async () => {
    const token = await getNewToken(tokenData);
    expect(typeof token === 'string').toBeTruthy();
  });

  test('breaks when no data provided.', async () => {
    try {
      await getNewToken(null);
    } catch (e) {
      expect(e.toString())
        .toMatch(/ValidationError: "value" must be an object/);
    }
  });
});
