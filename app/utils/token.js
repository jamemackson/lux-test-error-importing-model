import { sign } from 'lux-jwt';

const {
  TOKEN_SECRET = 'abcdefghijklmnopqrstuvwxyz',
  TOKEN_EXPIRES_IN_HOURS = 4
} = process.env;

export const secret = TOKEN_SECRET;

const expiresIn = 60 * 60 * TOKEN_EXPIRES_IN_HOURS;

export function getNewToken(data) {
  return new Promise((resolve, reject) => {
    sign(data, secret, { expiresIn }, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  });
}
