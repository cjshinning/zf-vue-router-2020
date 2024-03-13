import install from './install';
import createMatcher from './create-matcher';
class VueRouter {
  constructor(options) {
    // 创建匹配器的过程 1.匹配功能match 2.可以添加匹配addRoutes 动态路由添加
    createMatcher(options.routes || []);  //获取用户的整个配置

  }
  init(app) { //目前这个app指代的是最外层的new Vue
    // 需要根据用户配置 做出一个映射表来
    console.log(app)
  }
}
VueRouter.install = install;

export default VueRouter;