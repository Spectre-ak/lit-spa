
 import {LitElement, html, css} from 'lit';


 export class homePage extends LitElement {
   static get styles() {
     return css``;
   }
 
 
   constructor() {
     super();
   }
 
   render() {
     return html`
       404 component not found
     `;
   }
 
 }
 
 window.customElements.define('x-home-view', homePage);
 
 export class userPage extends LitElement {
    static get styles() {
      return css``;
    }
  
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        this is user page
      `;
    }
  
  }
  
  window.customElements.define('x-user-list', userPage);
