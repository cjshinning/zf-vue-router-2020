import createRouteMap from './create-route-map'

export default function createMatcher(routes) {
  // pathList 会吧所有的路由 组成一个数组 ['/','/about','/about/a','/about/b']
  // pathList {'/':{},'/about':{},'/about/a':{}}
  let { pathList, pathMap } = createRouteMap(routes);
  addRoutes([{ path: '/xxx', component: {} }])
  console.log(pathList, pathMap);
  function match() { //等会要提供用户输入的路径 获取对应的匹配记录

  }
  // 具备新增和添加的功能
  function addRoutes(routes) {  //routes动态添加的路由
    createRouteMap(routes, pathList, pathMap);
  }
  return {
    match,
    addRoutes
  }
}