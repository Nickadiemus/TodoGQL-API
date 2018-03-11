/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

/** component import(s)                                                 */

/** style import(s)                                                     */


/*/
 *  Component: TodoList
 *  @props {TodoObject id}
 *  @EventHandler(s):
 *  @Description: Populates a new view of Todoitems within
 *  a TodoObject
/*/
class TodoLists extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }

  render(){

    const listId = this.props.location.pathname.slice(11);
    console.log(listId);
    return(
      <div>
        Got here
      </div>
    )
  }
}

export default TodoLists;
