import install from './install';
import createMatcher from './create-matcher';
import HashHistory from './history/hashHistory';
import BrowserHistory from './history/browserHistory';
class VueRouter {
  constructor(options) {
    // 创建匹配器的过程 1.匹配功能match 2.可以添加匹配addRoutes 动态路由添加
    this.matcher = createMatcher(options.routes || []);  //获取用户的整个配置

    // 创建历史管理 （路由两只模式 hash 浏览器api）
    this.mode = options.mode || 'hash';
    switch (this.mode) {
      case 'hash':
        this.history = new HashHistory(this);
        break;
      case 'history':
        this.history = new BrowserHistory(this);
        break;
    }
  }
  init(app) { //目前这个app指代的是最外层的new Vue
    // 需要根据用户配置 做出一个映射表来
    // 需要根据当前路径 实现一个也没跳转的逻辑
    const history = this.history;
    // 跳转路径 会进行匹配操作 根据路径获取对应的记录
    let setupHashListener = () => {
      history.setupListener();
    }
    // 跳转路径 进行监控
    history.transitionTo(history.getCurrentLocation(), setupHashListener);

    // transitionTo 跳转逻辑 hash browser都有
    // getCurrentLocation hash和browser实现不一样
    // setupHashListener 
  }
}
VueRouter.install = install;

export default VueRouter;