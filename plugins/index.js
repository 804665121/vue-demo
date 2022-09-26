import List from './List.vue'
// const comment = {
//   install: function (Vue) {
//     Vue.component(table_plugin.name, table_plugin)
//   }
// }
// global 情况下 自动安装
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(comment)
// }
// 导出模块
// export default comment
 
export default {   //如果有多个组件可以通过数组循环
  install: (app, opts) => {
    app.component(List.name, List)
  }
}