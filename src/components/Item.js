import React, { Component } from 'react';

// <li style={{paddingBottom:"5px"}} className={selectedLi}>
//     <input type="checkbox" name="" id="" onChange={()=>{handleSelect(todo)}} />
//     <label style={{width:"80%"}}>{todo.value}</label>
//     <button onClick={()=>{handleRemoveItem(todo)}}>x</button>
// </li>

class items extends Component {
  constructor(){
    super()
    this.state={
       value:1,
       enableEdit:false,
        editInput:""
    }
  }
  //通过事件传递参数的方法：onClick={()=>fun1(todo)},而不是 onClick={fun1(todo)}
  render() {
    //获取父组件传递过来的值，通过this.props来接收；
    let {todo,handleRemoveItem,handleSelect}=this.props;
    let {enableEdit,editInput}=this.state;
    let selectedLi=todo.hasCompleted?"selectedLi":"";
    let className=todo.hasCompleted?"completed":"";
    className+=enableEdit?' editing':"";
    return (
        <li className={className}>
            <div className="view">
                <input
                type="checkbox"
                className="toggle"
                checked={todo.hasCompleted}
                onChange={()=>{handleSelect(todo)}}
                />
                <label style={{width:"80%"}}>{todo.value}</label>
                <button
                className="destroy"
                onClick={()=>{handleRemoveItem(todo)}}
                ></button>
            </div>
              <input
                  ref="editInput"
                  value={editInput}
                  type="text"
                  className="edit"
              />
        </li>
    );
  }
}

export default items;
