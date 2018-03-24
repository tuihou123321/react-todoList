import React, { Component } from 'react';
import Item from "./components/Item"
import Footer from "./components/Footer"
import './static/style/base.css'
import './static/style/index.css'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todosData:[], //{id,value,hasCompleted}
            inputValue:'11',
            view:'all' //要显示的视图
        }
        this.handleKeyDown=this.handleKeyDown.bind(this);
        this.handleKeyUp=this.handleKeyUp.bind(this);
        this.handleOnchange=this.handleOnchange.bind(this);
        this.handleRemoveItem=this.handleRemoveItem.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
        this.handleChangeAll=this.handleChangeAll.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
    }
    //双击修改事件；
    handleEdit(todo,value){
        let {todosData}=this.state;
        todosData=todosData.map((todo2,index)=>{
             if(todo2.id===todo.id){
                 todo2.value=value;
             }
             return todo2;
        })
        this.setState({todosData})
    }
    //选中效果
    handleSelect(todo){
        let {todosData}=this.state;
        todosData=todosData.filter((todo2)=>{
            if(todo2.id===todo.id){
                todo2.hasCompleted=!todo2.hasCompleted;
            }
            return true;
        })
        this.setState({todosData});
    }
    handleOnchange(e){
        this.setState({inputValue:e.target.value})
    }
    handleKeyUp(e){
        // console.log(e.target.value);
    }
    handleRemoveItem(todo){
        let {todosData}=this.state;
        todosData=todosData.filter((todo2)=>{
            return todo2.id!==todo.id;
        })
        this.setState({todosData})
    }
    handleKeyDown(e){
        let key=e.which || e.keyCode;
        let todosData=this.state.todosData;
        if(key===13){
           todosData.push({
                id:new Date().getTime(),
                value:e.target.value,
                hasCompleted:false
            })
            this.setState({todosData,inputValue:""})
        }
    }
    //选择，取消全部
    handleChangeAll(e){
        let {todosData}=this.state;
        //判断是否所有都被选中
        let isSelected=todosData.every((todo,index)=>{
               return todo.hasCompleted;
        })
        //如果所有被选中，那么全部不选 ；否则全部选中；
        todosData=todosData.map((todo,index)=>{
            if(isSelected){
                todo.hasCompleted=false;
            }
            else{
                todo.hasCompleted=true;
            }
            //map 循环遍历后，返回的值；
            return todo;
        })
        this.setState({todosData});
    }
  render() {
      let {handleKeyUp,handleKeyDown,handleOnchange,handleRemoveItem,handleSelect,handleChangeAll,handleEdit}=this
      let {inputValue}=this.state
      let items = this.state.todosData.map((todo, index) => {
          // return <Item key={index} todo={todo} handleRemoveItem={handleRemoveItem} handleSelect={handleSelect}/>
         //使用es6的结构赋值写法让代码更简洁
          return <Item key={index}  {...{todo,handleRemoveItem,handleSelect,handleEdit}}/>
      })
      let footer=(
        <div>
            <section className="main">
                <input
                onChange={handleChangeAll}
                type="checkbox"
                className="toggle-all"
                />
                <ul className="todo-list">
                    {items}
                </ul>
            </section>
            <Footer/>
        </div>
      )
    return (
        <div className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <input
                    value={inputValue}
                    type="text"
                    className="new-todo"
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                    onChange={handleOnchange}
                />
            </header>
            {footer}
        </div>
    );
  }
}
export default App;
