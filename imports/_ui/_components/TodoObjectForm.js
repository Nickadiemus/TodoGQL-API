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
 *  Function: createObject()
 *  @param(s) {n/a}
 *  @Descripotion: Calls Mutation function createTodoObject() that takes in
 *  a $name variable that is passed through the mutation function
 *  in "_api/_Todos/resolvers.js"
/*/
  createObject = () =>{
    this.props.createTodoObject({
      variables: {
        name: this.name.value
      }
    }).then(() => {
      this.name.value = "";
    }).catch(error =>{
      console.log(error);
    })
  };

  render(){
    console.log(this.props.key);
    return(
      <div style = {{padding: '0em 1.75em 0em 1.75em', 'marginTop':'1.75em'}}>
        <div style = {{'display':'inline'}}  className = "input-field">
          <div className = "row">
            <div className = "col s11">
              <input type = "text" ref={input => (this.name = input)} />
              <label htmlFor="TodoItem">TodoObject</label>
            </div>
            <div className = "col s1">
              <a style = {{cursor: 'pointer'}} onClick = {this.createObject} ><i style = {{'fontSize': '32px', 'margin': '15px 0px 0px 10px'}} className = "fa fa-plus right"/></a>
            </div>
          </div>
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
