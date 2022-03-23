import {html, css, LitElement} from 'lit';

export class ChromeDashFeature extends LitElement {
  static styles = css`section {
    width: 56%;
    margin-left: 13%;
    border: 3px solid;
    padding: 18px;
    background: #dbdbdb;    margin-top: 10px;
  }`;

  static properties = {
    heading: {type: String},
    summary: {type: String},
    description: {type: String},
    link: {type: String}
  };

  constructor(){
      super();

  }
  render() {
    return html`
        <div>
        <section class="desc" >
            <h2>
                <a href="${this.link}">${this.heading}</a>
            </h2>
            <summary>
            <!--?lit$569193979$-->
            <p class=""><span><!--?lit$569193979$--><!--?lit$569193979$-->${this.summary}<!--?--></span></p>
            </summary>
            <!--?lit$569193979$--><p></p><h3>Motivation</h3><p></p>
            <p class=""><span><!--?lit$569193979$--><!--?lit$569193979$-->${this.description}<!--?--></span></p>
        </section>
        </div>
    `;
  }
}

customElements.define('chromedash-feature', ChromeDashFeature);


