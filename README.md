# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 使用github服务器储存静态资源

github -> settings -> github pages -> none 选择分支

### 小程序获取路由参数

小程序在onLoad(params) 中获取参数

### 路由

微信中跳转的页面如果为tabBar中的页面，只能使用uni.switchTab
使用navigator跳转的页面如果为tabBar中的页面，需要添加属性open-type='switchTab'
navigatorTo : 历史是累加的
redirectTo ： 将历史记录中的最后一个替换
reLaunch : 将所有历史清除，自己加进入

### 开启转发功能

开启转发功能，使用页面的转发事件

### 真机调试代码size过大

```js
	"packOptions": {
		"ignore": [
			{
        "type":"folder",
        "value":"static/uploads"
      }
		]
	},
```

### 小程序渲染html(div)

```html
<rich-text>

```

UEditor

### 注意

使用uniapp时,避免在标签中使用 === 比较判断,可以通过计算属性


