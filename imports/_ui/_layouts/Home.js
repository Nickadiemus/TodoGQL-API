/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

/** component import(s)                                                 */
import TodoObjectForm from '../_components/TodoObjectForm';
import TodoObject from '../_components/TodoObject';
/** style import(s)                                                     */
import '../_style/atomloader.css';



/*/
 *  Component: Home
 *  @props {data}
 *  @EventHandler(s): None
 *  @Description: The base of the component tree that loads the TodoObjects
 *  and the TodoObjectForm
/*/
const Home = ({data}) => {
  if(data.loading){
    return(
      <div className = "loading-container">
        <div className="atom">
          <div className="centerdot"></div>
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
            <div className="dot4"></div>
          </div>
        </div>
      </div>
    )
  }
  else {
    const RenderedTodoObjects = data.TodoObjects.map(TodoObjects => (
      <TodoObject refetch = {data.refetch} key = {TodoObjects._id} item = {TodoObjects.name} id = {TodoObjects._id} todoItems = {TodoObject.items}/>
    ));
    return (
        <div>
          <ul className = "collection with-header">
            <li className = "collection-header"><h1>{data.HomeTitle}</h1></li>
            <TodoObjectForm />
            <ul className = "collection">
              {RenderedTodoObjects}
            </ul>
          </ul>
        </div>
    );
  }
}

const TodoObjectQ = gql`
  query TodoObjectQuery {
    HomeTitle,
    TodoObjects{
      _id
      name
      items{
        _id
        content
        completed
      }
      completed
    }
  }
`;

export default graphql(
  TodoObjectQ
)(Home);
