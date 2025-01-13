import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-home')
export default class Home extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <slot class="view-container"></slot>
    `;
  }
}
