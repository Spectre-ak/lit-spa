import {html, css, LitElement} from 'lit';

export class RoadmapBase extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    text: {type: String},
    data: {attribute: false}
  };

  constructor(){
      super();
      this.data = {
          feature: 'feature_0'
      }
  }
  render() {
    return html`<p>Hello, ${this.data.feature}!</p>`;
  }
}

customElements.define('roadmap-base', RoadmapBase);