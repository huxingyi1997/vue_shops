import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    // 导入弹框提示组件
    Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 进行全局挂载：
Vue.prototype.$message = Message
