/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import {Link} from 'react-router-dom';

/** component import(s)                                                 */
import Logo from './Logo';

/** style import(s)                                                     */
import '../_style/navbar.css';



/*/
 *  Component: Navbar
 *  @props {n/a}
 *  @EventHandler(s): none
 *  @Description: Basic navigation menu with Links to differnt Routes
/*/
class Navbar extends Component {

  render(){
    return(
      <div>
        <nav className="blue lighten-3">
          <div className="nav-wrapper">
            <a href="/home" className="brand-logo center foojilogo"><Logo /></a>
            <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <Link to = '/home' > <li style = {{
                'paddingRight': '1.25em'
              }} ><i className = "fa fa-list"></i> TodoLists</li></Link>
            </ul>
            <ul className="side-nav" id="main-menu">
              <Link to = '/' > <li style = {{color: 'black'}}><i className = "fa fa-list"></i> Home</li></Link>
              <Link to = '/home' > <li style = {{color: 'black'}}><i className = "fa fa-list"></i> TodoLists</li></Link>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
