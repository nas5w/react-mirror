const api = require('supertest');
require('dotenv').config();
const supertest = api.agent(process.env.BASE_URL);

describe('Metro API Route', () => {
  test('Post with station returns correct object shape', async () => {
    const {
      status,
      body: {
        message,
        data: { Trains },
      },
    } = await supertest.post('/metro').send({ station: 'C05' });
    expect(message).toBe('Metro data retrieved');
    expect(status).toBe(200);
    expect(Trains[0]).toHaveProperty('Car');
    expect(Trains[0]).toHaveProperty('Destination');
    expect(Trains[0]).toHaveProperty('DestinationCode');
    expect(Trains[0]).toHaveProperty('DestinationName');
    expect(Trains[0]).toHaveProperty('Group');
    expect(Trains[0]).toHaveProperty('Line');
    expect(Trains[0]).toHaveProperty('LocationCode');
    expect(Trains[0]).toHaveProperty('LocationName');
    expect(Trains[0]).toHaveProperty('Min');
  });
});
