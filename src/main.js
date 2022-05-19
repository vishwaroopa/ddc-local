// Import main css
//import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import "@fontsource/questrial";
import './index.css'
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global component
  if (window){
     let username = document.cookie.indexOf('analytics=');
        if (username != -1) {
            window['ga-disable-UA-100388653-1'] = true; // enter your tracking ID
            window['ga-disable-G-YBP5HZ98RC'] = true;
            window['ga-disable-UA-8394889-6'] = true;
        }
  }
 
  Vue.component('Layout', DefaultLayout)
  
}
