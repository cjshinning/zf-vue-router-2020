import { createRouteMap } from './create-route-map'

export default function createMatcher(routes) {
  // pathList 会吧所有的路由 组成一个数组 ['/','/about','/about/a','/about/b']
  // pathList {'/':{},'/about':{},'/about/a':{}}
  let { pathList, pathMap } = createRouteMap(routes);
  function match() { //等会要提供用户输入的路径 获取对应的匹配记录

  }
  function addRoutes() {

  }
  return {
    match,
    addRoutes
  }
}