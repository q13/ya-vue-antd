/**
 * 路由配置文件
 */
export default function () {
  return [{
    isCache: false, // 是否被缓存
    navText: '', // 导航文字
    navLink: '#', // 导航链接
    navVisible: false, // 导航是否可见
    permission: 'all', // 权限控制，无具备权限将会被筛选掉
    route: {
      path: '/nil/:props?',
      component: () => import('../pages/nil/index')
    }
  }, {
    isCache: false, // 是否被缓存
    navText: '', // 导航文字
    navLink: '#', // 导航链接
    navVisible: false, // 导航是否可见
    permission: 'all', // 权限控制，无具备权限将会被筛选掉
    route: {
      path: '/',
      component: () => import('../pages/welcome/index')
    }
  }, {
    isCache: false, // 是否被缓存
    navText: '', // 导航文字
    navLink: '#', // 导航链接
    navVisible: false, // 导航是否可见
    permission: 'all', // 权限控制，无具备权限将会被筛选掉
    route: {
      path: '/antd',
      component: () => import('../pages/antd/index')
    },
    children: [{
      isCache: false, // 是否被缓存
      navText: '', // 导航文字
      navLink: '#', // 导航链接
      navVisible: false, // 导航是否可见
      permission: 'all', // 权限控制，无具备权限将会被筛选掉
      route: {
        path: 'button',
        component: () => import('../pages/antd/button/index')
      }
    }]
  }];
};
