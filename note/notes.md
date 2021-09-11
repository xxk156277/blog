babel

koa

Linux指令

React

Redux saga

ladash

git

# 从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理

https://juejin.cn/post/6844903553795014663

# 快捷键

### mac

| 序号 |        用途        |          快捷键          |
| :--: | :----------------: | :----------------------: |
|  1   | control+左右方向键 |       左右桌面切换       |
|  2   |    command + M     | 最小化当前窗口至‘程序坞’ |
|  3   |                    |                          |



### vscode

| 序号 | 用途      | 快捷键         |
| ---- | --------- | -------------- |
| 1    | command+b | 开关侧边文件栏 |
|      |           |                |
|      |           |                |

### Chrome

| 序号 | 用途                              | 快捷键                        |
| ---- | --------------------------------- | ----------------------------- |
| 1    | command + option + 左右箭头       | 依次顺序轮换激活打开的标签页  |
| 2    | command + shift + T               | 重新打开已关闭的标签页        |
| 3    | command + shift + N               | 隐身模式下打开新窗口          |
| 4    | command + W / command + shift + W | 关闭当前标签页 / 关闭当前窗口 |
| 5    | command + L                       | 选中地址栏网址                |
| 6    | command + option + I              | 打开开发者工具                |
| 7    | command + option + U              | 查看源代码                    |
|      |                                   |                               |
|      |                                   |                               |

# diff算法

### 1、react或者vue中key的作用：

当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DON】的diff比较，比较规则如下：

- 旧虚拟DOM中找到了与新虚拟DOM相同的key：

  - 若虚拟DOM中内容没变，直接使用之前的真实DOM。
  - 若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM

- 旧虚拟DOM中未找到与新虚拟DOM相同的key：

  根据数据创建新的真实DOM，随口渲染到页面。

### 2、用索引值index作为key可能引发的问题：

- 若对数据进行：逆序添加、逆序删除等破坏顺序的操作：会产生没有必要的真实DOM更新 ==> 界面效果没有问题，但效率太低。
- 如果结构中还包含输入类的DOM：会产生错位DOM更新 ==> 界面有问题。

### 3、开发中如何选择key？

最好用数据的唯一表示



# immutable.js

https://juejin.cn/post/6844903482206470152



# 正则表达式

### 转译

`.`的两层含义：1、除换行外任何字符 2、普通点

# classnames库

动态拼接class:可以比较直观的看到哪些字符被拼接到class中去

```js
import classNames from 'classnames'

const class4 = 'str'
const class = classNames({
	'foo':true,
	'class2':true,
	'class3':false
	},
	class4,
)

//class = 'foo class2 str'
```



# FileReader

​	`FileReade*` 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 [`File`](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 或 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象指定要读取的文件或数据。

​	其中File对象可以是来自用户在一个元素上选择文件后返回的[`FileList`](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList)对象,也可以来自拖放操作生成的 [`DataTransfer`](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer)对象,还可以是来自在一个[`HTMLCanvasElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)上执行`mozGetAsFile()`方法后返回结果。

​	重要提示： FileReader仅用于以安全的方式从用户（远程）系统读取文件内容 它不能用于从文件系统中按路径名简单地读取文件。 要在JavaScript中按路径名读取文件，应使用标准Ajax解决方案进行服务器端文件读取，如果读取跨域，则使用CORS权限。



# 访问图片资源403问题

### 原因：

官方输出图片的时候，判断了来源  Referer ，就是从哪个网站访问这个图片，如果是你的网站去加载这个图片，那么 Referer 就是：你的网站地址。

如果我们的网站地址不在官方的白名单内，所以就看不到图片了。

我们做这个跳板的关键：不发送 Referer，也就是没有来源。那么官方那边，就认为是从浏览器直接访问的，所以就能加载正常的图片了。

作者：天明夜尽
链接：https://juejin.cn/post/6844903869755949069
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### referrer

https://juejin.cn/post/6844903842484600846



# 前端中的二进制流

https://juejin.cn/post/6945266413917437983

### npm install碰到的各种权限问题

![image-20210820134144272](/Users/xuxiaokang8/Library/Application Support/typora-user-images/image-20210820134144272.png)



# canvas

#### 绘制矩形

```js
context.fillRect(x,y,width,height)//实心矩形 默认黑色
context.strokeRect(x,y,width,heigh)//空心矩形
```

- x ：起始点的 x 坐标
- y ：起始点的 y 坐标
- width ： 矩形的宽
- height ： 矩形的高

**绘制样式**

```js
若要绘制样式，请在fill之前进行
context.fillStyle()//填充的样式
context.strokeStyle()//边框样式
context.lineWidth()//图形边框宽度
```

**清除矩形区域**

```
clearRect(x,y,width,height)
```



#### 绘制实心圆

```js
arc(x, y, radius, starAngle,endAngle, anticlockwise)
```

- x : 圆心的 x 坐标
- y：圆心的 y 坐标
- radius ： 半径
- starAngle ：开始角度
- endAngle：结束角度
- anticlockwise ：是否逆时针（true）为逆时针，(false)为顺时针

```js
  //script
  context.beginPath()
  context.arc(400,110,100,0,Math.PI*2,true)
  context.closePath()
  context.fillStyle = 'lightpink'
  context.fill()
```

**圆弧：实心圆无填充颜色（fillStyle）就是圆弧**

```js
  context.beginPath()
  context.arc(600,110,100,Math.PI*0.5,Math.PI*1.5,true)
  // context.closePath() 有无闭合线
  context.strokeStyle = "lightblue"
  context.stroke()
```

系统默认第一个路径的开始点为beginPath

如果









# 奇技淫巧

### 类型转化

```js
// 强制转换为Boolean 用 !!
var bool = !!"c";
console.log(typeof bool); // boolean

// 强制转换为Number 用 +
var num = +"1234";
console.log(typeof num); // number

// 强制转换为String 用 ""+
var str = ""+ 1234;
console.log(typeof str); // string

```

