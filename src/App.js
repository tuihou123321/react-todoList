import React, { Component } from 'react';
import { BrowserRouter as Router, Route, ReactDOM } from 'react-router-dom';
import Item from './components/Item';
import Footer from './components/Footer';
import './static/style/base.css';
import './static/style/index.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosData: [], //{id,value,hasCompleted}
      inputValue: '',
      view: 'all', //要显示的视图
      leftCount: '',
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChangeAll = this.handleChangeAll.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemoveCompletedItems = this.handleRemoveCompletedItems.bind(this);
  }
  //双击修改事件；
  handleEdit(todo, value) {
    let { todosData } = this.state;
    todosData = todosData.map((todo2, index) => {
      if (todo2.id === todo.id) {
        todo2.value = value;
      }
      return todo2;
    });
    this.setState({ todosData });
  }
  //选中效果
  handleSelect(todo) {
    let { todosData } = this.state;
    todosData = todosData.filter(todo2 => {
      if (todo2.id === todo.id) {
        todo2.hasCompleted = !todo2.hasCompleted;
      }
      return true;
    });
    this.setState({ todosData });
  }
  handleOnchange(e) {
    this.setState({ inputValue: e.target.value });
  }
  handleRemoveItem(todo) {
    let { todosData } = this.state;
    todosData = todosData.filter(todo2 => {
      return todo2.id !== todo.id;
    });
    this.setState({ todosData });
  }
  handleKeyDown(e) {
    let key = e.which || e.keyCode;
    let todosData = this.state.todosData;
    if (key === 13) {
      todosData.push({
        id: new Date().getTime(),
        value: e.target.value,
        hasCompleted: false,
      });
      this.setState({ todosData, inputValue: '' });
    }
  }
  //选择，取消全部
  handleChangeAll(e) {
    let { todosData } = this.state;
    //判断是否所有都被选中
    let isSelected = todosData.every((todo, index) => {
      return todo.hasCompleted;
    });
    //如果所有被选中，那么全部不选 ；否则全部选中；
    todosData = todosData.map((todo, index) => {
      if (isSelected) {
        todo.hasCompleted = false;
      } else {
        todo.hasCompleted = true;
      }
      //map 循环遍历后，返回的值；
      return todo;
    });
    this.setState({ todosData });
  }
  //删除已完成的任务
  handleRemoveCompletedItems() {
    let todosData = this.state.todosData.filter(todo => {
      return todo.hasCompleted === false;
    });
    this.setState({ todosData });
  }
  render() {
    let {
      location: { pathname: url },
    } = this.props;

    //上面写法等同于
    // let {location}=this.props;
    // let url=location.pathname;

    let {
      handleKeyDown,
      handleOnchange,
      handleRemoveItem,
      handleSelect,
      handleChangeAll,
      handleEdit,
      handleRemoveCompletedItems,
    } = this;
    let { inputValue, leftCount, todosData } = this.state;

    //过滤数据
    let items = todosData.filter((todo, index) => {
      switch (url) {
        case '/active':
          return !todo.hasCompleted;
        case '/completed':
          return todo.hasCompleted;
        default:
          return true;
      }
    });

    //绑定事件，传递参数
    items = items.map((todo, index) => {
      // return <Item key={index} todo={todo} handleRemoveItem={handleRemoveItem} handleSelect={handleSelect}/>
      //使用es6的结构赋值写法让代码更简洁
      return <Item key={index} {...{ todo, handleRemoveItem, handleSelect, handleEdit }} />;
    });

    leftCount = todosData.filter((todo, index) => {
      return todo.hasCompleted === false;
    });
    leftCount = leftCount.length;
    let footer = (
      <div>
        <section className="main">
          <input onChange={handleChangeAll} type="checkbox" className="toggle-all" />
          <ul className="todo-list">{items}</ul>
        </section>
        <Footer {...{ leftCount, url, handleRemoveCompletedItems }} />
      </div>
    );
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            value={inputValue}
            type="text"
            className="new-todo"
            onKeyDown={handleKeyDown}
            onChange={handleOnchange}
          />
        </header>
        {footer}
      </div>
    );
  }
}

// ReactDOM.render(
//     <Router>
//         <Route path="/" component={App}/>
//     </Router>,
//     document.getElementById("root")
// )

export default App;
