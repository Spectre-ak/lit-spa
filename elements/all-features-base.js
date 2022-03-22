import {html, css, LitElement} from 'lit';

export class AllFeaturesBase extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    text: {type: String},
    data: {attribute: false}
  };

  constructor(){
      super();
      this.data = {
          feature: 'feature_0_to_100_is_here'
      }
  }
  render() {
    return html`<p>Hello, ${this.data.feature}!</p>`;
  }
}

customElements.define('all-features-base', AllFeaturesBase);
