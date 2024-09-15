import Vue from "vue";
import App from "./App.vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vuelidate from "vuelidate";
import { required, email } from "vee-validate/dist/rules";
Vue.use(Vuelidate);

extend("email", {
  ...email,
  message: "Enter a valid email.",
});

extend("required", {
  ...required,
  message: (fieldName) => {
    // Capitalize the first letter of the field name
    const capitalizedField =
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    return `${capitalizedField} is required`;
  },
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
