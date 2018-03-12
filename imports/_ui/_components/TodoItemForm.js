/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

/** component import(s)                                                 */

/** style import(s)                                                     */

/*/
 *  Query Type: Mutation
 *  Requirement(s): String Type : IS REQUIRED
 *  @param(s): {$content, $parent} of Type Strings
 *  Description: takes two parameters that will create
 *  a TodoItem with a foreign key of the TodoObjeect
 *  it is nested within
/*/
const createTodoItem = gql`
  mutation createTodoItem($content: String!, $parent: String!)
  {
    createTodoItem(content: $content, parent: $parent){
      _id
    }
  }`;

/*/
 *  Component: TodoItemForm
 *  @props {TodoObjectid}
 *  @EventHandler(s):
 *  @Description:
/*/
class TodoItemForm extends Component {
  constructor(props){
    super(props);
  }

  createItem = () => {
    console.log(this.name.value);

    this.props.createTodoItem({
      variables: {
        content: this.name.value,
        parent: this.props.TodoObjectid
      }
    }).then( () => {
      this.name.value = "";
      this.props.refetch();
    }).catch(error => {
      throw error
    });
  }

  render(){
    return(
      <div>
        <div className = "input-field">
          <input id = "TodoItem" type = "text" ref={input => (this.name = input)} />
          <label htmlFor="TodoItem">TodoItem</label>
        </div>
          <a onClick = {this.createItem} >
            <i className = "fa fa-plus right"/>
          </a>
      </div>
    )
  }
}

export default graphql(createTodoItem, {
  name: "createTodoItem",
})(TodoItemForm);
