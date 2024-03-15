export default {
  name: 'router-view',
  functional: true, //函数式组件 不用new 没有this 没有生命周期 没有data 渲染性能高
  render(h, context) {
    // parent是当前父组件
    // data是这个组件上的一些标识
    // _vnode组件里面内容的虚拟节点 $vnode组件虚拟节点
    let { parent, data } = context;
    let route = parent.$route;
    let depth = 0;

    data.routerView = true;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      parent = parent.$parent;
    }

    let record = route.matched[depth];
    // console.log(context.props);
    if (!record) {
      return h(); //渲染一个空元素
    }
    return h(record.component, data)
  }
}