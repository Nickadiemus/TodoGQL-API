//main imports
import React, {Component} from 'react';

//helper imports

//style imports


class Navbar extends Component {
  render(){
    return(
      <div>
        <nav className="blue lighten-3">
          <div className="nav-wrapper">
            <a href="/home" className="brand-logo center foojilogo"><img src = "" alt = "logo" /></a>
            <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li><i className = "fa fa-list"></i>TodoLists</li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li><i className = "fa fa-list"></i> TodoLists</li>
              <li><i className = "fa fa-list"></i> Add TodoItem</li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
