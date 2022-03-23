import { html, css, LitElement } from 'lit';

export class RoadmapMilestones extends LitElement {
  static styles = css`p { color: blue }`;

    static get properties() {
        return {
            locationId: { type: String },
            // this is OBJECT
            milestoneName: { type: String },
            channelLabel: {type: String},
            betaDate: {type: String},
            betaDateState: {type: String},
            stableDate: {type: String},
            stableDateAgo: {type: String}
        };
    }

  constructor() {
    super();
  }
  render() {
    return html`
    <section class="release">
        <!--?lit$0616643716$-->
        <div class="layout vertical center">
            <h1 class="channel_label"><!--?lit$0616643716$-->${this.channelLabel}</h1>
            <h1 class="chrome_version layout horizontal center ">
                <span class="chrome-logo"></span>
                <a target="_blank" href="https://www.google.com/chrome/" title="Download Chrome Stable">${this.milestoneName}</a>
            </h1>
        </div>
        <!--?lit$0616643716$-->
        <div class="milestone_info layout horizontal center-center">
            <h3>
                <span class="channel_label">Beta</span> <!--?lit$0616643716$-->${this.betaDateState}
                <span class="milestone_info-beta">${this.betaDate}</span>
            </h3>
        </div>
        <div class="milestone_info layout horizontal center-center">
            <h3>
                <span class="channel_label">Stable</span> <!--?lit$0616643716$-->${this.stableDateAgo}
                <span class="release-stable">(${this.stableDate})</span>
            </h3>
        </div>


        <!--?lit$0616643716$-->
        <div class="features_list">
            <!--?lit$0616643716$-->
            <div class="features_header"><!--?lit$0616643716$-->Features in this release:</div>
            <!--?lit$0616643716$--><!----><!----><!---->
            <h3 class="feature_shipping_type"><!--?lit$0616643716$-->Deprecated</h3>
            <ul>
                <!--?lit$0616643716$--><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5667793157488640" class="">
                    <a href="/feature/5667793157488640"><!--?lit$0616643716$-->Deprecating minor WebCodecs spec violations</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Deprecated">
                            <iron-icon icon="chromestatus:warning" class="deprecated" data-tooltip=""></iron-icon>
                        </span>

                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!---->
            </ul>
            <!----><!---->
            <h3 class="feature_shipping_type"><!--?lit$0616643716$-->Enabled by default</h3>
            <ul>
                <!--?lit$0616643716$--><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5906556519448576" class="">
                    <a href="/feature/5906556519448576"><!--?lit$0616643716$-->"audioworklet" destination for AudioWorklet</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5722647932436480" class="">
                    <a href="/feature/5722647932436480"><!--?lit$0616643716$-->"paintworklet" destination for PaintWorklet</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5657825571241984" class="">
                    <a href="/feature/5657825571241984"><!--?lit$0616643716$-->Allow infinity, -infinity and NaN in CSS calc()</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5663362835808256" class="">
                    <a href="/feature/5663362835808256"><!--?lit$0616643716$-->CSS cascade layers</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5638996492288000" class="">
                    <a href="/feature/5638996492288000"><!--?lit$0616643716$-->Convert adoptedStyleSheets to use ObservableArray</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5692248021794816" class="">
                    <a href="/feature/5692248021794816"><!--?lit$0616643716$-->HTMLInputElement showPicker()</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5263213807534080" class="">
                    <a href="/feature/5263213807534080"><!--?lit$0616643716$-->Handwriting Recognition API</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="6051647656558592" class="">
                    <a href="/feature/6051647656558592"><!--?lit$0616643716$-->New Canvas 2D API</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5693119438782464" class="">
                    <a href="/feature/5693119438782464"><!--?lit$0616643716$-->Replace GamepadList with sequence&lt;Gamepad?&gt; for navigator.getGamepads() return value</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5679635154075648" class="">
                    <a href="/feature/5679635154075648"><!--?lit$0616643716$-->Unprefixed text-emphasis properties</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!---->
            </ul>
            <!----><!---->
            <h3 class="feature_shipping_type"><!--?lit$0616643716$-->In developer trial (Behind a flag)</h3>
            <ul>
                <!--?lit$0616643716$--><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5723581527883776" class="highlight">
                    <a href="/feature/5723581527883776"><!--?lit$0616643716$-->HIDDevice forget()</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5651456005767168" class="">
                    <a href="/feature/5651456005767168"><!--?lit$0616643716$-->Secure context fix for dedicated workers</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5700853265596416" class="">
                    <a href="/feature/5700853265596416"><!--?lit$0616643716$-->Web NFC: NDEFReader makeReadOnly()</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!---->
            </ul>
            <!----><!---->
            <h3 class="feature_shipping_type"><!--?lit$0616643716$-->Origin trial</h3>
            <ul>
                <!--?lit$0616643716$--><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5714780426862592" class="">
                    <a href="/feature/5714780426862592"><!--?lit$0616643716$-->Dark mode support for web apps</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Origin Trial">
                            <iron-icon icon="chromestatus:extension" class="experimental" data-tooltip=""></iron-icon>
                        </span>

                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!----><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5646861215989760" class="">
                    <a href="/feature/5646861215989760"><!--?lit$0616643716$-->Viewport-height client hint</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Origin Trial">
                            <iron-icon icon="chromestatus:extension" class="experimental" data-tooltip=""></iron-icon>
                        </span>

                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>


                <!---->
            </ul>
            <!----><!---->
            <h3 class="feature_shipping_type"><!--?lit$0616643716$-->Removed</h3>
            <ul>
                <!--?lit$0616643716$--><!---->
                <!--?lit$0616643716$-->
                <li data-feature-id="5639265565278208" class="">
                    <a href="/feature/5639265565278208"><!--?lit$0616643716$-->Remove font-family -webkit-standard</a>
                    <span class="icon_row">
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Removed">
                            <iron-icon icon="chromestatus:cancel" class="remove" data-tooltip=""></iron-icon>
                        </span>

                        <!--?lit$0616643716$-->
                        <!--?lit$0616643716$-->
                        <span class="tooltip" title="Sign in to get email notifications for updates">
                            <a href="#" data-tooltip="">
                                <iron-icon icon="chromestatus:star-border" class="pushicon">
                                </iron-icon>
                            </a>
                        </span>

                    </span>
                </li>

        </div>
    </section>


    `;
  }
}

customElements.define('roadmap-milestones', RoadmapMilestones);








