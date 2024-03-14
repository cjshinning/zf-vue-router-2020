// 根据匹配到的记录来匹配到的所有的
export const createRoute = (record, location) => {
  let matched = [];
  if (record) {
    while (record) {
      matched.unshift(record);
      record = record.parent; //通过当前记录找到所有的父亲
    }
  }

  return {
    ...location,
    matched
  }
}

export default class History {
  constructor(router) {
    this.router = router;

    // 这个代表的是当前路径匹配出来的记录
    // / { path: '/', component: Home }
    // /about/a { path: '/about', component: about } { path: '/about/a', component: A }
    this.current = createRoute(null, {
      path: '/'
    });
  }
  transitionTo(location, complete) {
    // 获取当前路径 匹配出对应的记录 当路径变化时获取对应的记录 => 渲染（router-view）
    // 通过路径拿到对应的记录 有了记录之后 就可以找到对应的匹配
    let current = this.router.match(location);
    // console.log(this.current);
    // console.log(location);  //匹配路径
    // 防止重复点击 不需要再次渲染
    // 匹配到的个数和路径都是相同的就不需要再次跳转
    console.log(this.current.path, location);
    if (this.current.path == location && this.current.matched.length === current.matched.length) {
      return;
    }
    // 用最新匹配到的结果去更新试图
    this.current = current;
    this.cb && this.cb(current);

    // 当路径变化后 current属性会进行更新操作
    complete && complete();
  }
  listen(cb) {
    this.cb = cb;
  }
}