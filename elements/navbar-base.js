import {html, css, LitElement} from 'lit';

export class NavbarTopBase extends LitElement {
  static styles = css`
  nav ul {list-style-type: none;margin: 0;overflow: hidden;background-color: #333;}
  nav ul li a {clear float: right;}
  nav ul li  a {display: block;color: white;text-align: center;padding: 14px 16px; text-decoration: none;}
  nav ul li {display: inline-block;}  nav ul li:hover {
    background: #c1bbbb!important;
}
`;

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
            <ul class="navbar-nav">
                <li>
                    <a class="navbar-brand" href="/features" style="font-size: 25px;"><img style=" margin-bottom: -5px;" src="https://chromestatus.com/static/img/chrome_logo.svg" width="30px"/> Chrome Platform Status</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/roadmap">Roadmap</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/features">All Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/metrics">Stats</a>
                </li>
            </ul>
            </div>
        </nav>
    `;
  }
}

customElements.define('navbar-base', NavbarTopBase);


