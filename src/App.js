import React, { Component } from 'react';
import logo from './logo.svg';
import Item from "./components/Item"
import "./static/style/base.css"
import "./static/style/index.css"


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
  render() {
      let {handleKeyUp,handleKeyDown,handleOnchange,handleRemoveItem,handleSelect}=this
      let {inputValue}=this.state

      let Items = this.state.todosData.map((todo, index) => {
          return <Item key={index} todo={todo} handleRemoveItem={handleRemoveItem} handleSelect={handleSelect}/>
      })
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <input
                    type="text"
                    className="new-todo"
                    value={inputValue}
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                    onChange={handleOnchange}
                />
            </header>
        </div>
    );
  }
}

export default App;
