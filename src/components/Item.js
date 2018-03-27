import React, { Component } from 'react';
import PT from "prop-types"

let propTypes={
    todo:PT.object,
    handleRemoveItem:PT.func,
    handleSelect:PT.func
}

class items extends Component {
  constructor(){
    super()
    this.state={
       value:1,
       enableEdit:false,  //item是否可编辑
       editInput:"",  //input 编辑框内的文字
       val:""
    }
    this.handleonDoubleClick=this.handleonDoubleClick.bind(this)
    this.handleEditOnKeyDown=this.handleEditOnKeyDown.bind(this)
    this.handleOnChange=this.handleOnChange.bind(this)
    this.editOnBlur=this.editOnBlur.bind(this)
  }
    editOnBlur(e){
      this.setState({enableEdit:false});
    }
  //修改编辑框的内容
    handleOnChange(e){
      this.setState({editInput:e.target.value});
    }
    handleEditOnKeyDown(e){
        //回车后保存
        let {handleEdit}=this.props;
        if(e.keyCode==13){
            this.setState({enableEdit:false});
            let {todo}=this.props;
            let {editInput}=this.state;
            // 修改todosData中的数据；
            handleEdit(todo,editInput);
        }
    }
    handleonDoubleClick(){
      let {todo} =this.props;
      //setState是一个异步操作，接收两个参数，第一个修改的对象值，第二个回调函数；
      this.setState({
          enableEdit:true,
          editInput:todo.value
      },()=>{
          //点击后让input force 自动获取焦点
          //通过refs获取真实的dom节点；
          this.refs.editInput.focus();
      })
    }
  //通过事件传递参数的方法：onClick={()=>fun1(todo)},而不是 onClick={fun1(todo)}
  render() {
    //获取父组件传递过来的值，通过this.props来接收；
    let {todo,handleRemoveItem,handleSelect}=this.props;
    let {enableEdit,editInput}=this.state;
    let {handleonDoubleClick,handleEditOnKeyDown,handleOnChange,editOnBlur}=this;
    // let selectedLi=todo.hasCompleted?" selectedLi":"";
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
                <label style={{width:"80%"}} onDoubleClick={handleonDoubleClick}>{todo.value}</label>
                <button
                className="destroy"
                onClick={()=>{handleRemoveItem(todo)}}
                ></button>
            </div>
              <input
                  ref="editInput"
                  value={editInput}
                  onBlur={editOnBlur}
                  onChange={handleOnChange}
                  onKeyDown={handleEditOnKeyDown}
                  type="text"
                  className="edit"
              />
        </li>
    );
  }
}

export default items;
items.propTypes=propTypes;