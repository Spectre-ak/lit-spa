import { html, css, LitElement } from 'lit';
import './roadmap-milestones';
export class RoadmapBase extends LitElement {
  static styles = css`.container {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .container div {
    width: 100%;
    padding: 5px;
    
  }`;

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
    this.rootMsg = window.state.rootMsg === null ? "" : window.state.rootMsg;
  }
  render() {
    return html`
    <input type="text" @input=${this._change} value = "${this.rootMsg}"/>
    <div>
      Msg is here: ${this.rootMsg}
    </div>
    <div class="container">
      <div>
        <roadmap-milestones @updaterRoot=${this._change} rootMsg="${this.rootMsg}" milestoneName="Chrome 99" channelLabel="STABLE" betaDateState="was" betaDate=" Feb 3 - Feb 10" stableDate="Mar 1" stableDateAgo=" 22 days ago"></roadmap-milestones>
      </div>
      <div style="float:left">
        <roadmap-milestones @updaterRoot=${this._change} rootMsg="${this.rootMsg}" milestoneName="Chrome 100" channelLabel="NEXT UP" betaDateState="between" betaDate=" Mar 3 - Mar 10" stableDate="Mar 29" stableDateAgo=" in 6 days"></roadmap-milestones>
      </div>
      <div style="float:left">
        <roadmap-milestones @updaterRoot=${this._change} rootMsg="${this.rootMsg}" milestoneName="Chrome 101" channelLabel="DEV" betaDateState="coming" betaDate=" Feb 3 - Feb 10" stableDate="Mar 26" stableDateAgo=" in 34 days"></roadmap-milestones>
      </div>
    </div>
      
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
    this._saveState();
  }
  _saveState(){
    window.state['rootMsg'] = this.rootMsg;
  }
}

customElements.define('roadmap-base', RoadmapBase);