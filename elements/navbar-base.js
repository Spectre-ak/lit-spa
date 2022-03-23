import {html, css, LitElement} from 'lit';

export class NavbarTopBase extends LitElement {
  static styles = css`
  nav ul {list-style-type: none;margin: 0;overflow: hidden;background-color: #333;}
  nav ul li a {clear float: right;}
  nav ul li  a {display: block;color: white;text-align: center;padding: 14px 16px;}
  nav ul li {display: inline-block;}`;

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
                    <a class="navbar-brand" href="/features" style="font-size: 25px;">Chrome Platform Status</a>
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


