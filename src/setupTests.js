import '@testing-library/jest-dom';

const originalError = console.error?.bind(console.error);

beforeAll(() => {
  console.error = (msg) =>
    !msg.toString().includes('Error:') && originalError(msg);
  console.error = (msg) =>
    !msg.toString().includes('Warning:') && originalError(msg);
});
afterAll(() => {
  console.error = originalError;
});
