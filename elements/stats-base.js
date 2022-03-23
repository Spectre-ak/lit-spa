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
    return html`
    <div id="column-container">
        <div id="drawer-column">
    <!-- For Wider View Ports with larger screen size -->
    <ul class="metric-nav">
    <h3>All properties</h3>
    <li><a href="/metrics/css/popularity">Stack rank</a></li>
    <li><a href="/metrics/css/timeline/popularity">Timeline</a></li>
    <h3>Animated properties</h3>
    <li><a href="/metrics/css/animated">Stack rank</a></li>
    <li><a href="/metrics/css/timeline/animated">Timeline</a></li>
    </ul>

    <!-- For Narror ViewPorts with small screen size -->
    <div id="horizontal-sub-nav">
    <nav class="data-panel">
    <table>
    <tbody><tr>
      <td>View All Properties As:</td>
      <td>
        <a href="/metrics/css/timeline/popularity" class="sub-nav-links">Timeline</a>
        |
        <a href="/metrics/css/popularity" class="sub-nav-links">Stack Rank</a>
      </td>
    </tr>
    </tbody></table>
    </nav>

    <nav class="data-panel">
    <table>
    <tbody><tr>
      <td>View Animated Properties As:</td>
      <td>
        <a href="/metrics/css/timeline/animated" class="sub-nav-links">Timeline</a>
        |
        <a href="/metrics/css/animated" class="sub-nav-links">Stack Rank</a>
      </td>
    </tr>
    </tbody></table>
    </nav>
    </div>

    </div>
        <div id="content-column">
          
    <div id="subheader">
    <h2>CSS usage &gt; all properties &gt; stack rank</h2>
    </div>

          
    <div class="data-panel">
    <h3>About this data</h3>
    <p class="description">
    We've been using Chrome's <a href="https://cs.chromium.org/chromium/src/tools/metrics/histograms/enums.xml" target="_blank" rel="noopener">anonymous usage statistics</a> to count the
    occurrences of certain CSS features in the wild. The numbers on
    this page indicate the <b>percentages of Chrome page loads (across
    all channels and platforms) that use the corresponding CSS
    property at least once</b>.

    Newly added use counters that are not on Chrome stable yet only
    have data from the Chrome channels they're on, which makes them
    hard to compare to older use counters.

    Data is ~24 hrs old.</p>

    </div>

        </div>
      </div>
    `;
  }
}

customElements.define('stats-base', StatsBase);
