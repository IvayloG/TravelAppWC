import { expect } from '@open-wc/testing';
import FAQ from './faq.js';

describe('FAQ', () => {
  it('<app-faq> is an instance of FAQ', async () => {
    const element = document.createElement('app-faq');
    expect(element).to.be.instanceOf(FAQ);
  });
});
