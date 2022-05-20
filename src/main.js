// Import main css
//import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import "@fontsource/questrial";
import './index.css'
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global componen
 
  Vue.component('Layout', DefaultLayout)
  
}
