import App from './App'

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}

import map from 'common/fun.js'
Vue.prototype.map = map

// #endif

import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'

// 全局方法挂载
import {dictData} from '@/common/common.js'
Vue.prototype.dictData = dictData

//引入element-ui框架

import ElementUI from 'element-ui';
import 'element.js';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from "echarts";
Vue.prototype.$echarts = echarts

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
dayjs.extend(relativeTime);
Vue.use(ElementUI);
Vue.prototype.dayjs = dayjs;//可以全局使用dayjs