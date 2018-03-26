#react-todoList
>通过这个实例，基本完成了对对象todosData的增（addItem）、删(removeItem)、改(editItem)、查功能(filterItem)；


主要知识点：
- 组件数据交互（获取父组件值，触发父组件的方法） this.props.value,this,props.handleRemoveItem(todo)
- 获取真实的DOM节点，this.refs.editInput.focus();
- react单向数据流的思想，区别于vue的双向数据流;数据往顶层往底层传递
- jxs语法特点   <div style={width:"100px",height:"200px"} className="hidden" onKeyDown={handleOnkeyDown}>{value}</div>




