import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {BrowserRouter as Router,Route} from "react-router-dom"

class Footer extends Component {
  constructor(){
    super()
    this.state={
    }
  }
  render() {
    let {leftCount,pathname,handleRemoveCompletedItems}=this.props;
    let clearAllBtn=(
          <button
            className="clear-completed"
            onClick={handleRemoveCompletedItems}
            >clear all completed</button>
    )
    return (
        <Router>
        <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount}</strong>
        <span>item left</span>
      </span>
          <ul className="filters">
            <li>
              <Link
                  to="/"
                  className={pathname==='/'?'selected':null}
              >All</Link>
            </li>
            <li>
              <Link
                  to="/active"
                  className={pathname==='/active'?'selected':null}
              >Active</Link>
            </li>
            <li>
              <Link
                  to="/completed"
                  className={pathname==='/completed'?'selected':null}
              >Completed</Link>
            </li>
          </ul>
            {clearAllBtn}
        </footer>
        </Router>
    )
  }
}
export default Footer;
