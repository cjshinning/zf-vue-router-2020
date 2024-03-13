export let Vue;
import RouterLink from './components/router-link';
import RouterView from './components/router-view';
const install = function (_Vue) {
  // install方法内部一般会用它来定义一些全局的内容 指令、全局组件、给原型扩展方法
  Vue = _Vue;
  Vue.component('router-link', RouterLink);
  Vue.component('router-view', RouterView);

  // 用户将router属性注册到new Vue上
  // 希望每个子组件都可以获取到 router 属性
  Vue.mixin({
    beforeCreate() { //mixin可以给beforeCreate这个生命周期增加合并的方法
      // console.log('name', this.$options.router);
      // 如果有router 说明你再跟实例上增加了router 当前这个实例是根实例
      // 渲染流程是先父后子，渲染完毕是先子后父
      if (this.$options.router) {
        // 根
        // console.log('根', this.$options.name);
        this._routerRoot = this;  //将当前根实例放到了_routerRoot
        this._router = this.$options.router;
        // 当前用户的router属性
        this._router.init(this);  //调用插件中的init方法
      } else {
        // 儿子
        // console.log('儿子', this.$options.name);
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
      // 所有的组件都拥有了this._routerRoot属性
      // console.log(this._routerRoot._router);
    }
  });
}

export default install;