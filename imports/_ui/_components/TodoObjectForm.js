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
 *  @param(s): {$name} of Type String
 *  Description: takes in one parameter from a text field and passes the
 *  data to the resolver to then hit the database
/*/
const createTodoObject = gql`mutation createTodoObject($name: String!) {createTodoObject(name: $name){_id}}`;

/*/
 *  Component: TodoObjectForm
 *  @props {n/a}
 *  @EventHandler(s): onSubmit()
 *  @Description: TodoObjectForm is a form component that allows population
 *  of TodoObjects
/*/
class TodoObjectForm extends Component {

/*/
 *  Function: onSubmit()
 *  @param(s) {n/a}
 *  @Descripotion: Calls function createTodoObject() when the button Event
 *  Handler is initiated.
/*/
  onSubmit = () =>{
    console.log(this.name.value);
    this.props.createTodoObject({
      variables: {
        name: this.name.value
      }
    }).catch(error =>{
      console.log(error);
    })
  };

  render(){
    console.log(this.props.key);
    return(
      <div style = {
        {
          padding: '0em 1.75em 0em 1.75em'
        }
      }
      >
        <div className = "input-field">
          <input type = "text" ref={input => (this.name = input)} />
          <button className = "btn" onClick = {this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

//refetches queries when TodoObjects are inserted
export default graphql(createTodoObject, {
  name: "createTodoObject",
  options:  {
    refetchQueries: [
      'TodoObjectQuery'
    ]
  }
})(TodoObjectForm)
