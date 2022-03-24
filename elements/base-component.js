import { html, css, LitElement } from 'lit';
import { Router }  from '@vaadin/router';

export class BaseComponent extends LitElement {
  static styles = css``;

  static properties = {
    text: { type: String },
    data: { attribute: false },
    rootMsg: {type: String}
  };

  constructor() {
    super();
    this.data = {
      feature: 'feature_0'
    }
    console.log('base connected state');
    console.log(this.renderRoot);
    console.log(this.shadowRoot);
    console.log(this.shadowRoot)
    console.log(this.shadowRoot);
    console.log(this.shadowRoot);
  }
  connectedCallback() {
    super.connectedCallback()
    console.log(this.renderRoot);
    console.log(this.shadowRoot);
    console.log(this.shadowRoot.querySelector('slot'));
    console.log(this.shadowRoot.children.outlet);
    console.log(this.shadowRoot.children[1]);
    
    
    console.log(this.renderRoot.querySelector('div'))
    console.log(this.renderRoot.querySelector('#outlet'))
    console.log(this.shadowRoot.querySelector('div'))
    console.log(this.shadowRoot.querySelector('#outlet'))
    const router = new Router(this.renderRoot.querySelector('#outlet'));
    router.setRoutes([
        {path: '/', component: 'all-features-base'},
        {path: '/custom', component: 'my-element'},
        {path: '/features', component: 'all-features-base'},
        {path: '/roadmap', component: 'roadmap-base'},
        {path: '/metrics', component: 'stats-base'},
        {path: '/feature/:featureId', component: 'chrome-feature'},
        {path: '(.*)', component: 'not-found-page'}
    ]);
    console.log('connectedCallbackroot component is hrere');

  }
  render() {
    return html`
    <div id="outlet">jj</div>
    `;
  }
  _change(e){
    console.log(e);
    if(e.type === 'input'){
      console.log(this.renderRoot.querySelector('input').value);
      this.rootMsg=this.renderRoot.querySelector('input').value;
    } else if(e.type === 'updaterRoot'){
      console.log(e.detail.data);
      this.rootMsg=e.detail.data;
    }
  }
  _up(e){
    console.log(e);
  }
}

customElements.define('base-component', BaseComponent);