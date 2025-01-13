import { expect } from '@open-wc/testing';
import ResetPassword from './reset-password.js';

describe('ResetPassword', () => {
  it('<app-reset-password> is an instance of ResetPassword', async () => {
    const element = document.createElement('app-reset-password');
    expect(element).to.be.instanceOf(ResetPassword);
  });
});
