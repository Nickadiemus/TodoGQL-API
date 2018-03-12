/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */



class TodoItem extends Component {
  constructor(props){
    super(props);
    console.log(props);
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
