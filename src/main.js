import Vue from "vue";
import App from "./App.vue";
import "bulma";
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
