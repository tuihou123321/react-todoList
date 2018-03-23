import React, { Component } from 'react';


class items extends Component {
  constructor(){
    super()
    this.state={
       value:1
    }
  }
  //通过事件传递参数的方法：onClick={()=>fun1(todo)},而不是 onClick={fun1(todo)}
  render() {
    //获取父组件传递过来的值，通过this.props来接收；
    let {todo,handleRemoveItem,handleSelect}=this.props;
    let selectedLi=todo.hasCompleted?"selectedLi":"";
    return (
          <li style={{paddingBottom:"5px"}} className={selectedLi}>
            <input type="checkbox" name="" id="" onChange={()=>{handleSelect(todo)}} />
            <label style={{width:"80%"}}>{todo.value}</label>
            <button onClick={()=>{handleRemoveItem(todo)}}>x</button>
          </li>
    );
  }
}

export default items;
