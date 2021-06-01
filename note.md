## 思维导图

https://www.yuque.com/docs/share/accaea64-4e93-4891-b779-406a0a0f368c

## 本地测试运行

```sh
npm run play
```

## 准备工作

### Vue.js 源码目录设计

```sh
src
├── compiler        # 编译相关[把模板解析成 ast 语法树，ast 语法树优化，代码生成等功能]
├── core            # 核心代码[包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数等]
├── platforms       # 不同平台的支持[在 web 和 weex 上的 Vue.js]
├── server          # 服务端渲染
├── sfc             # .vue 文件解析 [把 .vue 文件内容解析成一个 JavaScript 的对象]
├── shared          # 共享代码 [浏览器端的 Vue.js 和服务端的 Vue.js 所共享]
```

## 数据驱动

目标是弄清楚模板和数据如何渲染成最终的 DOM

### new Vue 发生了什么

Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等。最后，检测到如果有 el 属性，则调用 vm.$mount 方法挂载 vm

> `src/core/instance/index.js` => `src/core/instance/init.js`

### Vue 实例挂载的实现
