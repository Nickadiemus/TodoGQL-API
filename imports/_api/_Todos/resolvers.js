import TodoObject from './TodoObject';
import TodoItem from '../_TodoItems/TodoItem.js'

export default {
  Query: {

    /*/
     *  CALL TYPE: Query
     *  REQUIREMENT(S):
     *  @PARAM(S): {$id} of Type String
     *  @RETURN TYPE: ARRAY[] OF JSON OBJECTS OF TODO OBJECTS
     *  DESCRIPTION:  A simply query that will find all the TodoObjects in
     *  the MongoDB and returns them in an array
    /*/
    TodoObjects(){
      return TodoObject.find({}).fetch();
    },

    /*/
     *  CALL TYPE: Query
     *  REQUIREMENT(S): Type String : IS REQUIRED
     *  @PARAM(S): {$id} of Type String
     *  @RETURN TYPE: SINGLE JSON OBJECT OF SPECIFIC TODO OBJECT
     *  DESCRIPTION: returns a TodoObject matching the unique key identifier
     *  provided by $id from the database
    /*/
    FindTodoObject(obj, { id }, context){
      console.log(id);
      return TodoObject.findOne({
        _id: id
      })
    }
  },

  /*/
   *  CALL TYPE: Custom Query
   *  REQUIREMENT(S):
   *  @PARAM(S): {NONE} of NONE
   *  @RETURN TYPE: ARRAY OF TOODITEMS CORRESPONDING WITH THE TODO OBJECT'S
   *  ID
   *  DESCRIPTION: a helper query for when loading TodoObject's corresponding
   *  TodoItems. Matches the unique key of the TodoObject within the TodoItem's
   *  parent key.
  /*/
  TodoObject: {
    items: todoitems => {
      console.log(todoitems);
      return TodoItem.find({
        parent: todoitems._id
      }).fetch();
    }
  },
 
  Mutation: {

    /*/
     *  CALL TYPE: Mutation (creating)
     *  REQUIREMENT(S): Type String : IS REQUIRED
     *  @PARAM(S): {$name} of Type String
     *  @RETURN TYPE: NONE
     *  DESCRIPTION: creates a new TodoObject with a unique ID, name that is
     *  a required String and assigned a false boolean for the key value pair
     *  completed. This then inserts it into the MongoDB
    /*/
    createTodoObject(obj, args, context) {
      const TodoObjectId = TodoObject.insert({
        name: args.name,
        completed: false
      })
      return;
    },

    /*/
     *  CALL TYPE: Mutation (deletion)
     *  REQUIREMENT(S): Type String : IS REQUIRED
     *  @PARAM(S): {$key} of Type String
     *  @RETURN:
     *  DESCRIPTION: Provides a cascade deletion of a specific TodoObjects
     *  and its TodoItems in the Database. With its unique key identifier it
     *  will delete the TodoItems with the corresponding parent key with the
     *  provided TodoObject's key. Then it will delete the TodoObject
    /*/

    deleteTodoObject(obj, args, context) {
      //Deletion of TodoItems
      const CascadeRemoveTodoItem = TodoItem.remove({
        parent: args.key
      })
      //Deletion of TodoObject
      const RemoveTodoObjectId = TodoObject.remove({
        _id: args.key
      });

      return;
    }
  }
}
