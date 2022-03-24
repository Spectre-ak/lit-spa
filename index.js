import './elements/not-found-page';
import './elements/all-features-base';
import './elements/loader-topbar';
import './elements/roadmap-base';
import './elements/stats-base';
import './elements/navbar-base'
import './elements/chrome-feature'
import { Router }  from '@vaadin/router';


const router = new Router(document.getElementById('outlet'));
router.setRoutes([
  {path: '/', component: 'all-features-base'},
  {path: '/custom', component: 'my-element'},
  {path: '/features', component: 'all-features-base'},
  {path: '/roadmap', component: 'roadmap-base'},
  {path: '/metrics', component: 'stats-base'},
  {path: '/feature/:featureId', component: 'chrome-feature'},
  {path: '(.*)', component: 'not-found-page'}
]);

window.state = {};