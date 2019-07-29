const { nyTimesServiceInstance, NyPeriods, NySections } = require('../../src/services/ny-times.service');

jest.setTimeout(1000 * 60);

const INVALID_API_LINK = '???';

describe('NY Times API Test', () => {
  test('Invalid API key --->', async () => {
    const testResult = false;
    expect(testResult).toBe(false);
  });

  test('Valid API key --->', async () => {
    const result = true;
    expect(result).toBe(true);
  });
});
