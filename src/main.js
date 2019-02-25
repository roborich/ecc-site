// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import netlifyIdentity from 'netlify-identity-widget';
import DefaultLayout from "~/layouts/Default.vue";
import registerIcons from "./registerIcons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

netlifyIdentity.init();
registerIcons();

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("FaIcon", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/rqj4hkm.css"
  });
}
