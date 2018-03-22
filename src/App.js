import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from "./components/Item"


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todosData:[1,2], //{id,value,hasCompleted}
            inputValue:'',
            view:'all' //要显示的视图
        }
    }
  render() {
    let Items=this.state.todosData.map((value,index)=>{
        return <Item/>
    })
    return (
      <div className="container text-center">
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <h1 style={{fontSize:"60px",color:"#ead7d7"}}>todos</h1>
          <div>
              <div>
                  <input type="text" className="form-control"/>
              </div>
              <div>
                  {Items}
              </div>
              <div>
                  底部
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
