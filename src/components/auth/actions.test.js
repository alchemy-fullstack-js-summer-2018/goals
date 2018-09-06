jest.mock('../../services/goalsApi', () => ({
  signin: jest.fn(),
  signup: jest.fn(),
  verify: jest.fn()
}));