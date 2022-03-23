import {html, css, LitElement} from 'lit';
import "./chromedash-feature"
export class AllFeaturesBase extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    text: {type: String},
    data: {attribute: false}
  };

  constructor(){
      super();
      this.data = {
          heading: [
            ":has() pseudo class", "Add Save Data Client Hint", "CSS break-after, break-before and break-inside (Generic breaking control)", "CSS color-mix function"
          ],
          summary: [
            "The :has() pseudo class is a selector that specifies an element which has at least one element that matches the relative selector pas",
            "The Sec-CH-Save-Data client hint indicates whether the user agent intends to reduce data usage. It will be sent by default on ",
            "Add support for the modern fragmentainer break controlling properties break-after, break-before and break-inside. Currently, Blink only supports pag",
            "color-mix takes two color specifications and returns the result of mixing them, in a given colorspace, by a specified amount. For example, `color-m"
          ],
          link: [
            "/feature/5794378545102848",
            "/feature/3563534654723452",
            "/feature/2342378545102848",
            "/feature/2242443564745345"
          ],
          description: [
            "Unlike other selectors, :has pseudo class gives a way to apply a style rule to preceding elements (preceding siblings / ancestors / preceding siblings of ancestors) of a certain elements. This difference is attractive to web developers, but also it generates lots of concerns mainly about performance and complexity. So there have been discussion about these over the years, but it was difficult to get those discussion moving forward. It is true that it can generate performance issues and complex cases. But it is also true that there have been clear demands for the usage. We thought that, clarifying those concerns would be helpful for the discussion. So we started to check feasibility on blink, and were able to get some meaningful and reasonable results from this step. Based on the results, we are going to move forward by prototyping. With the prototyping, we want to break",
            "The current `Save-Data` header is sent when a browser or operating system data saver setting is on (e.g., Lite mode) for all first and third party requests, lives outside the client hints system, and is named improperly. `Sec-CH-Save-Data` will be a proper client hint and its delegation to third parties could be prevented via permissions policies.",
            "Add support for the modern fragmentainer break controlling properties break-after, break-before and break-inside. Curre",
            "This new function will give designers greater flexibility when working with colors. One example is to create tinted variants of a single base color to form a design palette. We also need this function to support a CSSWG resolution related to background-color in forced colors mode. The resolution calls for using color-mix to construct the used background-color from the rgb channels of the appropriate system color plus the alpha channel from the computed color."
          ]
      }
  }
  render() {
    return html`
       <chromedash-feature heading="${this.data.heading[0]}" summary="${this.data.summary[0]}" description="${this.data.description[0]}" link="${this.data.link[0]}"></chromedash-feature>)}
       <chromedash-feature heading="${this.data.heading[1]}" summary="${this.data.summary[1]}" description="${this.data.description[1]}" link="${this.data.link[1]}"></chromedash-feature>)}
       <chromedash-feature heading="${this.data.heading[2]}" summary="${this.data.summary[2]}" description="${this.data.description[2]}" link="${this.data.link[2]}"></chromedash-feature>)}
       <chromedash-feature heading="${this.data.heading[3]}" summary="${this.data.summary[3]}" description="${this.data.description[3]}" link="${this.data.link[3]}"></chromedash-feature>)}
      
    `;
  }
}

customElements.define('all-features-base', AllFeaturesBase);
