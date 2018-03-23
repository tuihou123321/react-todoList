import React, { Component } from 'react';
// import './App.css';
// import './static/css/common.css'
import Item from "./components/Item"

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
    }
    //选中效果
    handleSelect(todo){
        console.log(100);
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
        todosData=todosData.map((todo,index)=>{
            todo.hasCompleted=!todo.hasCompleted;
            //map 循环遍历后，返回的值；
            return todo;
        })
        this.setState({todosData});
    }
  render() {
      let {handleKeyUp,handleKeyDown,handleOnchange,handleRemoveItem,handleSelect,handleChangeAll}=this
      let {inputValue}=this.state
      let items = this.state.todosData.map((todo, index) => {
          return <Item key={index} todo={todo} handleRemoveItem={handleRemoveItem} handleSelect={handleSelect}/>
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
        </div>
      )
    return (
        <div>
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
