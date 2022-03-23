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
    data: { attribute: false }
  };

  constructor() {
    super();
    this.data = {
      feature: 'feature_0'
    }
  }
  render() {
    return html`
    <div class="container">
      <div>
        <roadmap-milestones milestoneName="Chrome 99" channelLabel="STABLE" betaDateState="was" betaDate=" Feb 3 - Feb 10" stableDate="Mar 1" stableDateAgo=" 22 days ago"></roadmap-milestones>
      </div>
      <div style="float:left">
        <roadmap-milestones milestoneName="Chrome 100" channelLabel="NEXT UP" betaDateState="between" betaDate=" Mar 3 - Mar 10" stableDate="Mar 29" stableDateAgo=" in 6 days"></roadmap-milestones>
      </div>
      <div style="float:left">
        <roadmap-milestones milestoneName="Chrome 101" channelLabel="DEV" betaDateState="coming" betaDate=" Feb 3 - Feb 10" stableDate="Mar 26" stableDateAgo=" in 34 days"></roadmap-milestones>
      </div>
    </div>
      
    `;
  }
}

customElements.define('roadmap-base', RoadmapBase);