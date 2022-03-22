import {html, css, LitElement} from 'lit';

export class LoaderTopbar extends LitElement {
  static styles = css`
    #myProgress {
        width: 100%;
        background-color: grey;
    }
    
    #myBar {
        width: 1%;
        height: 30px;
        background-color: green;
    }
  `;

  static properties = {
    text: {type: String},
    data: {attribute: false}
  };

  constructor(){
      super();
  }
  
  render() {
    return html`
        <div id="myProgress">
            <div id="myBar"></div>
        </div>
    `;
  }
}

customElements.define('loader-topbar', LoaderTopbar);