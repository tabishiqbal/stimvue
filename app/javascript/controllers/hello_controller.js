import { Controller } from "stimulus"
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import VCalendar from 'v-calendar';

export default class extends Controller {
  static targets = [ "load" ]

  connect() {
    // register/mount calendar first as it won't be available in the vue instance.
    this.initializeVCalendar()
    // You can wrap this in a setTimout() to also see it loading after stimulus is connected
    this.initializeComponent()
  }

  initializeVCalendar() {
    Vue.use(VCalendar)
  }

  initializeComponent() {
    // props cannot be sent to vue-component as normal.  instead you would have to get them from stimulus and then pass it on to
    // your vue instance.
    let person = JSON.parse(this.data.get('props'))
    
    this.vue = new Vue({
      el: this.loadTarget,
      render: h => h(App, {
        props: {person: person},
      })
    });
  }
}
