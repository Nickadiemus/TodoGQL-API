/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

/** component import(s)                                                 */

/** style import(s)                                                     */
import '../_style/fa-icon.css'


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

/*/
 *  Function: createItem()
 *  @param(s) {n/a}
 *  @Descripotion: Calls Mutation Function createTodoItem() that takes in
 *  a $content and $parent variable that is passed through the mutation
 *  function in "_api/_TodoItems/resolvers.js"
/*/
  createItem = () => {
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
      <div className = "row">
        <div className = "col s11">
          <input type = "text" ref={input => (this.name = input)} />
          <label htmlFor="TodoItem">TodoItem</label>
        </div>
        <div className = "col s1">
          <a style = {{cursor: 'pointer'}} onClick = {this.createItem} ><i style = {{'fontSize': '24px', 'margin': '15px 0px 0px 10px'}} className = "fa fa-plus right"/></a>
        </div>
      </div>
    )
  }
}

export default graphql(createTodoItem, {
  name: "createTodoItem",
})(TodoItemForm);
