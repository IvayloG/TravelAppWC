import { expect } from '@open-wc/testing';
import InApp from './in-app.js';

describe('InApp', () => {
  it('<app-in-app> is an instance of InApp', async () => {
    const element = document.createElement('app-in-app');
    expect(element).to.be.instanceOf(InApp);
  });
});
