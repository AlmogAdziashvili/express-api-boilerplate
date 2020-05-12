/* eslint-disable no-undef */
const request = require('supertest');
const HttpStatus = require('http-status-codes');
const app = require('../src/app');

describe('GET /', () => {
  it('Code 200', (done) => {
    request(app)
      .get('/')
      .set({ Accept: 'application/json' })
      .expect('Content-Type', /json/)
      .expect(HttpStatus.OK, done);
  });
});
