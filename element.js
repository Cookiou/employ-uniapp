import Vue from 'vue';
import{ Select, Option, OptionGroup, Input,Image, DatePicker } from 'element-ui';
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Input);
Vue.use(Image);
Vue.use(DatePicker);