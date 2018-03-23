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
    let className=todo.hasCompleted?"completed":"";
    return (
        <li className={className}>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    onChange={()=>{handleSelect(todo)}}
                />
                <label
                >{todo.value}</label>
                <button
                    className="destroy"
                    onClick={()=>{handleRemoveItem(todo)}}
                ></button>
            </div>
            <input
                type="text"
                className="edit"
            />
        </li>
    );
  }
}

export default items;
