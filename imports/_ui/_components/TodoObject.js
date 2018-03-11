/** main import(s)                                                      */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

/** helper import(s)                                                    */
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

/** component import(s)                                                 */
import TodoLists from '../_layouts/TodoLists';

/** style import(s)                                                     */



/*/
 *  Query Type: Mutation
 *  Requirement(s): String Type : IS REQUIRED
 *  @param(s): {$key} of Type String
 *  Description: takes one parameter that is the unique key of a
 *  TodoObject to pass to the resolver and then delete in the
 *  database
/*/
const deleteTodoObject = gql`mutation deleteTodoObject($key: String!){deleteTodoObject(key: $key){_id}}`;

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
      key: props.id
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
    return(
      <li className = "collection-item">
        <Link to = {`/TodoLists/${this.state.key}`}  >{this.state.item}</Link>
        <a onClick = {this.onDelete} ><i className = "fa fa-trash-o right"></i></a>
      </li>
    )
  }
}

//exports TodoObject and refetches queries when TodoObjects are Deleted
export default graphql(deleteTodoObject, {
  name: "deleteTodoObject",
  option: {
    refetchQueries: [
      'TodoObjectQuery'
    ]
  }
})(TodoObject);
