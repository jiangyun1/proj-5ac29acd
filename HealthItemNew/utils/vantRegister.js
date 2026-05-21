/* —————————————— Vant 组件注册 (需使用this方法的特殊组件): uniapp版 ———————————————— */

import Vue from 'vue'

import Dialog from '../wxcomponents/vant/dialog/dialog';
import Toast from '../wxcomponents/vant/toast/toast';
import Notify from '../wxcomponents/vant/notify/notify';
import VanCellGroup from '../wxcomponents/vant/cell-group/index'
import VanField from '../wxcomponents/vant/field/index'
Vue.prototype.$dialog = Dialog;
Vue.prototype.$toast = Toast;
Vue.prototype.$notify = Notify; 
Vue.prototype.$VanCellGroup = VanCellGroup; 
Vue.prototype.$VanField = VanField; 
