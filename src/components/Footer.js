import React, { Component } from 'react'
import { Link } from "react-router-dom"


  import PT from "prop-types"

//对上层组件传递过来的数据类型进行校验,需要安装prop-types 插件，出于性能考虑，只在开发环境运行；
//常用的数据类型
// number,object,str,bool,func
//如果数据类型不是预期的类型，控制台会打印值类型错误信息
let propTypes = {
  leftCount: PT.number,

  url: PT.string,
  handleRemoveCompletedItems: PT.func,
};

class Footer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    //对上层组件传递过来的数据要先验证数据类型
    let { leftCount, url, handleRemoveCompletedItems } = this.props;
    let clearAllBtn = (
      <button className="clear-completed" onClick={handleRemoveCompletedItems}>
        clear all completed
      </button>
    );
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftCount}</strong>
          <span>item left</span>
        </span>
        <ul className="filters">
          <li>
            <Link to="/" className={url === '/' ? 'selected' : null}>
              All
            </Link>
          </li>
          <li>
            <Link to="/active" className={url === '/active' ? 'selected' : null}>
              Active
            </Link>
          </li>
          <li>
            <Link to="/completed" className={url === '/completed' ? 'selected' : null}>
              Completed
            </Link>
          </li>
        </ul>
        {clearAllBtn}
      </footer>
    );
  }
}
export default Footer;

Footer.propTypes = propTypes;
