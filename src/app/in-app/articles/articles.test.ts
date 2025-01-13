import { expect } from '@open-wc/testing';
import Articles from './articles.js';

describe('Articles', () => {
  it('<app-articles> is an instance of Articles', async () => {
    const element = document.createElement('app-articles');
    expect(element).to.be.instanceOf(Articles);
  });
});
