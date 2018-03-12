/** main import(s)                                                      */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

/** helper import(s)                                                    */
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

/** component import(s)                                                 */
import TodoItem from './TodoItem';
import TodoItemForm from './TodoItemForm';
/** style import(s)                                                     */



/*/
 *  Query Type: Mutation
 *  Requirement(s): String Type : IS REQUIRED
 *  @param(s): {$key} of Type String
 *  Description: takes one parameter that is the unique key of a
 *  TodoObject to pass to the resolver and then delete in the
 *  database
/*/
const deleteTodoObject = gql`
  mutation deleteTodoObject($key: String!)
  {
    deleteTodoObject(key: $key){
      _id
    }
  }`;

/*/
 *  Component: TodoObject
 *  @prop(s) {key, _id, name}
 *  @EventHandler(s): Function onDelete()
 *  @Description: Component used to disply TodoObject and provide navigation to   *  TodoObjeectItems
/*/
class TodoObject extends Component {
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      item: props.item,
      key: props.id,
      todoitems: props.todoitems
    }
  }

/*/
 *  Function onDelete()
 *  @param(s) {n/a}
 *  @Descripotion: Calls function deleteTodoObject passed through as a prop
 *  through graphql and refetchQueries from database
/*/
  onDelete = () => {
    this.props.deleteTodoObject({
      variables: {
        key: this.state.key
      }
    }).then( () => {
      this.props.refetch();
    }).catch(error => {
      throw error
    });
  }


  render(){
    const TodoItems = this.props.todoitems.map(TodoItems => (
      <TodoItem key = {TodoItems._id} id = {TodoItems._id} content = {TodoItems.content} completed = {TodoItems.completed}/>
    ));
    return(
      <li>
        <div className="collapsible-header"><span>{this.state.item}</span><a onClick = {this.onDelete} ><i className = "fa fa-trash-o right"></i></a></div>
        <div className="collapsible-body">
          <TodoItemForm refetch = {this.props.refetch} TodoObjectid = {this.props.id}/>
          <ul className = "collection">
            {TodoItems}
          </ul>
        </div>
      </li>
    )
  }
}

const TodoObjectWithMutations =
graphql(deleteTodoObject, {
  name: "deleteTodoObject",
  option: {
    refetchQueries: [
      'TodoObjectQuery'
    ]
  }
})(TodoObject)

//exports TodoObject and refetches queries when TodoObjects are Deleted
export default TodoObjectWithMutations;
