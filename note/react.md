# 深入理解组件

## 组件state

### 1 、state

state所代表的一个组件UI呈现的完整状态集可以分类两类：

- 渲染组件时用到的数据
- 用作组件UI展现形式的判断依据

props、state和组件的普通属性都是直接挂载在this下的变量

以下属性应该定义在state中：

- 与组件渲染有关
- render方法中用到的属性

props和state的区别：

props是父组件传来的，对于当前组件，其属性是只读的，想要修改必须修改父组件中的值。state是当前组件内部自己维护的状态，是可变的。

### 2、修改state

```
this.setState()
```

state的修改是异步的，setState()只是将要修改的状态放入一个队列之中，可能会将多次setState的状态修改合并成一次。所以不能依赖当前的state和props来计算下一个状态（props的更新也是异步的）

### 3、state与不可变对象

state中某个状态发生变化，应该重新创建这个对象，而不是直接改变这个对象。

## 组件与服务器通信

React组件的正常运转本质上是组件不同生命周期方法的有序执行。通信不例外

### 1、组件挂在阶段通信

- componentDidMount：此时组件已经挂载，真是DOM渲染完成。
- componentWillMount：组件挂载前（执行通信越早，意味着服务器数据越能更快地返回组件）

componentDidMount更好的原因：

1. componentDidMount中，组件已挂载，操作DOM安全，componentWillMount无法保证。
2. 服务器渲染时，componentWillMount会调用两次，componenDidMount只调一次，避免重复请求

### 2、组件更新阶段通信

componentWillReceiveProps

## 组件通信

### 1、父子组件通信

props传参➕回调函数

### 2、兄弟组件通信

同一个父组件，利用父子组件通信

context上下文

状态管理工具

## ref

