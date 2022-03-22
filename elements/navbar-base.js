import {html, css, LitElement} from 'lit';

export class NavbarTopBase extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    text: {type: String},
    data: {attribute: false}
  };

  constructor(){
      super();
      this.data = {
          feature: 'feature_0'
      }
  }
  render() {
    return html`
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/features">Google Chrome</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/roadmap">Roadmap</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/features">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/metrics">Stats</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link" href="/custom">Test Element</a>
                </li> 
            </ul>
            </div>
        </nav>
    `;
  }
}

customElements.define('navbar-base', NavbarTopBase);


