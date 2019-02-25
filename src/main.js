// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "~/layouts/Default.vue";
import registerIcons from "./registerIcons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

registerIcons();

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("FaIcon", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/rqj4hkm.css"
  });
  head.script.push({
    type: 'text/javascript',
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
  })
}
