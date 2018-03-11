/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import {Link} from 'react-router-dom';

/** component import(s)                                                 */

/** style import(s)                                                     */



/*/
 *  Component: Start
 *  @props {n/a}
 *  @EventHandler(s): None
 *  @Description: small interaction that routes you to the /home path
 *  containing all the Todo List content
/*/
class Start extends Component {

  render(){
    return(
      <div style = {{
        marginBottom: '100%'
      }} className = "container center">
        <div className = "">
          <h1><strong>Todo Application</strong></h1>
        </div>
        <Link to = "/home" className="btn btn-floating btn-large pulse blue lighten-3"><i className = "large material-icons">arrow_forward</i></Link>
      </div>
    )
  }
}

export default Start;
