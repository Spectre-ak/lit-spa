import {html, css, LitElement} from 'lit';

export class StatsBase extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    text: {type: String},
    data: {attribute: false}
  };

  constructor(){
      super();
      this.data = {
          feature: 'stats_are_here'
      }
  }
  render() {
    return html`<p>Hello, ${this.data.feature}!</p>`;
  }
}

customElements.define('stats-base', StatsBase);
