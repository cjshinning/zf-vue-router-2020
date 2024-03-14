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
    this.current = this.router.match(location);
    console.log(this.current);
    // console.log(location);  //匹配路径
    complete && complete();
  }
}