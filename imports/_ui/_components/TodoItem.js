/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */


/*/
 *  Component: TodoItem
 *  @props {id: Type String, content: Type String, completed: Type Boolean}
 *  @EventHandler(s): None
 *  @Description: Basic TodoItem created from an array of TodoItems passed
 *  as props from TodoObject
/*/
class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: props._id,
      content: props.content,
      completed: props.completed
    }
  }

  render(){
    return(
      <li className = "collection-item">
        {this.props.content}
      </li>
    )
  }
}

export default TodoItem;
