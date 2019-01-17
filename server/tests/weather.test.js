const api = require('supertest');
require('dotenv').config();
const supertest = api.agent(process.env.BASE_URL);

describe('Weather API Route', () => {
  test('Post with zip code returns the correct shape', async () => {
    const {
      body: {
        message,
        data: { current, forecast },
      },
    } = await supertest.post('/weather').send({ zip: '20001' });
    expect(message).toBe('Weather data retrieved');
    expect(current).toBeTruthy();
    expect(forecast).toBeTruthy();
  });
});
