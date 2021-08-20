babel

koa

Linux指令

React

Redux saga

ladash

git

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



# 前端中的二进制流

https://juejin.cn/post/6945266413917437983



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

