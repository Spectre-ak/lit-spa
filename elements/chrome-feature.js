import {html, css, LitElement} from 'lit';

export class ChromeFeature extends LitElement {
  static styles = css`#feature { 
        max-width: 70%;
        margin-left: 77px;
        padding: 2%;
        border: 1px solid;
        background: #e6e6e6;
   }`;

  static properties = {
    text: {type: String},
    data: {attribute: false},
    location: {attribute: false}
  };

  constructor(){
      super();
      this.data = {
          feature: 'stats_are_here'
      }
  }
  render() {
    return html`
        <div id="feature">
            <h2>${this.location.params.featureId}</h2>
        <div >

        <section id="summary">
          <p class="preformatted">Throws an AbortSignal's reason if the signal is aborted. This convenience method can be used by signal-handling functions to check a signal's abort status and propagate the abort reason, e.g. after async operations that might change a signal's state.</p>
        </section>

        <section id="motivation">
          <h3>Motivation</h3>
          <p class="preformatted">AbortSignal-handling functions often need to check the signal's status and propagate the error if the signal has been aborted. AbortSignal.throwIfAborted provides a convenient and consistent way to do this.</p>
        </section>

        <section id="demo">
          <h3>Demo</h3>
          <ul>
            
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/throwIfAborted#examples">https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/throwIfAborted#examples</a></li>
            
          </ul>
        </section>
        <section id="specification">
          <h3>Specification</h3>
          <p><a href="https://dom.spec.whatwg.org/#dom-abortsignal-throwifaborted" target="_blank" rel="noopener">Specification link</a></p>
          <br>
          <p>
            <label>Status:</label>
            Final published standard: Recommendation, Living Standard, Candidate Recommendation, or similar final form
          </p>
        </section>
        <section id="status">
          <h3>Status in Chromium</h3>
            <p>
              <label>Blink components:</label> 
              <a href="https://bugs.chromium.org/p/chromium/issues/list?q=component:Blink>DOM" target="_blank" rel="noopener">Blink&gt;DOM</a> 
            </p>
          <br>
          <p>
            <label>Implementation status:</label>
            <b>Enabled by default</b>
            
              (<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1273458" target="_blank" rel="noopener">tracking bug</a>)
            
            <chromedash-gantt feature="{&quot;activation_risks&quot;: &quot;The feature has already been implemented in both Safari and Firefox, but it would benefit from a polyfill for use in older browser versions.&quot;, &quot;all_platforms&quot;: true, &quot;all_platforms_descr&quot;: &quot;&quot;, &quot;api_spec&quot;: true, &quot;category&quot;: &quot;DOM&quot;, &quot;comments&quot;: &quot;&quot;, &quot;debuggability&quot;: &quot;Basic tooling only, i.e. autocomplete support for the new AbortSignal method will be provided.&quot;, &quot;deleted&quot;: false, &quot;ergonomics_risks&quot;: &quot;None; this feature is an ergonomic improvement for AbortSignal users.&quot;, &quot;experiment_extension_reason&quot;: &quot;&quot;, &quot;experiment_goals&quot;: &quot;&quot;, &quot;experiment_risks&quot;: &quot;&quot;, &quot;explainer_links&quot;: [&quot;Discussion: https://github.com/whatwg/dom/issues/927&quot;, &quot;Examples: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/throwIfAborted&quot;], &quot;feature_type&quot;: &quot;Existing feature implementation&quot;, &quot;flag_name&quot;: &quot;--enable-blink-features=AbortSignalThrowIfAborted&quot;, &quot;i2s_lgtms&quot;: [&quot;miketaylr@chromium.org&quot;, &quot;yoavweiss@chromium.org&quot;, &quot;chrishtr@chromium.org&quot;], &quot;intent_stage&quot;: &quot;Shipped&quot;, &quot;intent_to_implement_url&quot;: &quot;https://groups.google.com/a/chromium.org/d/msgid/blink-dev/CAKXGoJ3tUkTGZ1VBQm4139zL0n%3De-DO5emVpZE3ukya4Akyu2w%40mail.gmail.com&quot;, &quot;intent_to_ship_url&quot;: &quot;https://groups.google.com/a/chromium.org/g/blink-dev/c/bpiezft1AIc/m/62I9XS5UAQAJ&quot;, &quot;interop_compat_risks&quot;: &quot;Low risk. This feature is already part of the DOM standard, has web platform tests, and is implemented by Safari and Firefox. We'll improve eventual interop by shipping this feature.&quot;, &quot;launch_bug_url&quot;: &quot;https://bugs.chromium.org/p/chromium/issues/detail?id=1290443&quot;, &quot;measurement&quot;: &quot;UseCounter: AbortSignalThrowIfAborted&quot;, &quot;motivation&quot;: &quot;AbortSignal-handling functions often need to check the signal's status and propagate the error if the signal has been aborted. AbortSignal.throwIfAborted provides a convenient and consistent way to do this.&quot;, &quot;name&quot;: &quot;AbortSignal.prototype.throwIfAborted&quot;, &quot;non_oss_deps&quot;: &quot;&quot;, &quot;ongoing_constraints&quot;: &quot;&quot;, &quot;privacy_review_status&quot;: &quot;Issues addressed&quot;, &quot;requires_embedder_support&quot;: false, &quot;security_review_status&quot;: &quot;Issues addressed&quot;, &quot;security_risks&quot;: &quot;None.&quot;, &quot;star_count&quot;: 8, &quot;summary&quot;: &quot;Throws an AbortSignal's reason if the signal is aborted. This convenience method can be used by signal-handling functions to check a signal's abort status and propagate the abort reason, e.g. after async operations that might change a signal's state.&quot;, &quot;tag_review&quot;: &quot;N/A: the feature has been merged into the DOM standard and has been shipped in at least one other browser, in line with the criteria in https://groups.google.com/a/chromium.org/g/blink-dev/c/naqmDmy1iM8/m/lQAJ17CRAQAJ.&quot;, &quot;tag_review_status&quot;: &quot;Not applicable&quot;, &quot;unlisted&quot;: false, &quot;wpt&quot;: true, &quot;wpt_descr&quot;: &quot;https://wpt.fyi/results/dom/abort/event.any.html?label=master&amp;label=experimental&amp;aligned&amp;q=dom%2Fabort&quot;, &quot;is_released&quot;: true, &quot;id&quot;: 5029737100476416, &quot;feature_type_int&quot;: 1, &quot;intent_stage_int&quot;: 8, &quot;created&quot;: {&quot;by&quot;: &quot;shaseley@google.com&quot;, &quot;when&quot;: &quot;2022-01-24 18:22:29.857470&quot;}, &quot;updated&quot;: {&quot;by&quot;: &quot;shaseley@google.com&quot;, &quot;when&quot;: &quot;2022-03-09 19:34:22.596949&quot;}, &quot;standards&quot;: {&quot;spec&quot;: &quot;https://dom.spec.whatwg.org/#dom-abortsignal-throwifaborted&quot;, &quot;status&quot;: {&quot;text&quot;: &quot;Editor's draft&quot;, &quot;val&quot;: 4}, &quot;maturity&quot;: {&quot;text&quot;: &quot;Final published standard: Recommendation, Living Standard, Candidate Recommendation, or similar final form&quot;, &quot;short_text&quot;: &quot;Published standard&quot;, &quot;val&quot;: 5}}, &quot;resources&quot;: {&quot;samples&quot;: [&quot;https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/throwIfAborted#examples&quot;]}, &quot;browsers&quot;: {&quot;chrome&quot;: {&quot;bug&quot;: &quot;https://bugs.chromium.org/p/chromium/issues/detail?id=1273458&quot;, &quot;blink_components&quot;: [&quot;Blink>DOM&quot;], &quot;owners&quot;: [&quot;shaseley@chromium.org&quot;], &quot;origintrial&quot;: false, &quot;intervention&quot;: false, &quot;prefixed&quot;: false, &quot;flag&quot;: false, &quot;status&quot;: {&quot;text&quot;: &quot;Enabled by default&quot;, &quot;val&quot;: 5, &quot;milestone_str&quot;: 100}, &quot;desktop&quot;: 100, &quot;android&quot;: 100, &quot;webview&quot;: 100}, &quot;ff&quot;: {&quot;view&quot;: {&quot;text&quot;: &quot;Shipped/Shipping&quot;, &quot;val&quot;: 1, &quot;url&quot;: &quot;https://bugzilla.mozilla.org/show_bug.cgi?id=1745372&quot;, &quot;notes&quot;: &quot;&quot;}}, &quot;edge&quot;: {&quot;view&quot;: {&quot;text&quot;: &quot;No signal&quot;, &quot;val&quot;: 5}}, &quot;safari&quot;: {&quot;view&quot;: {&quot;text&quot;: &quot;Shipped/Shipping&quot;, &quot;val&quot;: 1, &quot;url&quot;: &quot;https://bugs.webkit.org/show_bug.cgi?id=234127&quot;, &quot;notes&quot;: &quot;&quot;}}, &quot;webdev&quot;: {&quot;view&quot;: {&quot;text&quot;: &quot;Positive&quot;, &quot;val&quot;: 2, &quot;notes&quot;: &quot;Minor positive feedback (likes) from announcement tweets:\r\n - Safari: https://twitter.com/chris_dumez/status/1469566206516424704\r\n - Node: https://twitter.com/simonplend/status/1487053107720859648 and https://twitter.com/jasnell/status/1466093594129756166&quot;}}, &quot;other&quot;: {&quot;view&quot;: {&quot;notes&quot;: &quot;&quot;}}}}"></chromedash-gantt>
          </p>
        </section>
        <section id="consensus">
          <h3>Consensus &amp; Standardization</h3>
          <div style="font-size:smaller;">After a feature ships in Chrome, the values listed here are not guaranteed to be up to date.</div>
          <br>
          <ul>
            <li>
              <label>Firefox:</label>
              
              <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1745372">Shipped/Shipping</a>
              
            </li>
            <li>
              <label>Safari:</label>
              
              <a href="https://bugs.webkit.org/show_bug.cgi?id=234127">Shipped/Shipping</a>
              
            </li>  
            <li><label>Web Developers:</label> Positive</li>
          </ul>
        </section>
        <section id="owner">
          <h3>Owner</h3>
          <ul>    
              <li><a href="mailto:shaseley@chromium.org">shaseley@chromium.org</a></li>    
          </ul>
        </section>
        <section id="intent_to_implement_url">
          <h3>Intent to Prototype url</h3>
          <a href="https://groups.google.com/a/chromium.org/d/msgid/blink-dev/CAKXGoJ3tUkTGZ1VBQm4139zL0n%3De-DO5emVpZE3ukya4Akyu2w%40mail.gmail.com">Intent to Prototype thread</a>
          
        </section>
        <section id="updated">
          <p><span>Last updated on 2022-03-09</span></p>
        </section>
      </div>

        </div>
    `;
  }
}

customElements.define('chrome-feature', ChromeFeature);
