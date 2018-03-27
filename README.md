# react-todoList

## 技术栈
React+React-router+React-create-app+PropsType+Webpack+ES6

### 项目运行

```
git clone git@github.com:tuihou123321/react-todoList.git
cd react-todoList
npm i
npm run dev
```

## 界面功能展示
<p><img src="https://raw.githubusercontent.com/tuihou123321/react-todoList/dev/screenshots/1.gif"></p>
<p><img src="https://raw.githubusercontent.com/tuihou123321/react-todoList/dev/screenshots/2.gif"></p>



## 主要功能：
- [x] 新增任务
- [x] 完成任务
- [x] 删除单条任务
- [x] 过滤任务（全部/未完成/已完成）
- [x] 未完成任务数据统计
- [x] 清空所有已完成任务


## 主要知识点：
- **数据渲染修改**
对todosData的增（addItem）、删(removeItem)、改(editItem)、查(filterItem)功能
- **组件数据交互**
获取父组件值，触发父组件的方法） this.props.value,this,props.handleRemoveItem(todo)
- **路由动态匹配**
react-router匹配路由来改变数据状态,动态获取路由的值
let {location:{path：url}}=this.props;
- **props数据校验**
使用propTypes插件来对this.props的数据类型进行校验 number,array,object,string,bool,func）
- **获取真实DOM节点**
this.refs.editInput.focus();
- **jxs语法特点**
  `<div style={width:"100px",height:"200px"} className="hidden" onKeyDown={handleOnkeyDown}>{value}</div>`



## 其他体会：
> react单向数据流的思想，区别于vue的双向数据流;数据往顶层往底层传递




