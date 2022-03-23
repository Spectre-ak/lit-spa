/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';


export class NotFound extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       * @type {string}
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       * @type {number}
       */
      count: {type: Number},
      location: {attribute: false}
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <h4>Component is not ready for this route.......</h4>
      <div style="padding-left:50px">
        <a href=${this.location.params["0"]}> ${(this.location.params["0"])}</a>
      </div>
    `;
  }

}

window.customElements.define('not-found-page', NotFound);
