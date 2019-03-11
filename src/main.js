// This is the main.js file. Import global CSS and scripts here.
import VueMq from 'vue-mq';
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue';
import registerIcons from './registerIcons';
import Hero from './components/Hero';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default function(Vue, { router, head, isClient }) {
  registerIcons();

  // Set default layout as a global component
  Vue.use(VueMq, {
    breakpoints: {
      phone: 599,
      tablet: 1200,
      desktop: Infinity,
    },
    defaultBreakpoint: 'phone',
  });
  Vue.component('FaIcon', FontAwesomeIcon);
  Vue.component('Layout', DefaultLayout);
  Vue.component('Hero', Hero);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/rqj4hkm.css',
  });
  head.script.push({
    type: 'text/javascript',
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
  });
}
