import TodoItem from "./TodoItem";

export default {

  Query: {

    /*/
     *  CALL TYPE: Query
     *  Requirement(s):
     *  @param(s): {NONE} of NONE
     *  @return type: ARRAY[] OF JSON OBJECTS OF TODOITEMS
     *  Description: A simply query that will find all the TodoItems in
     *  the MongoDB and returns them in an array
    /*/
    TodoItems(){
      return TodoItem.find({}).fetch();
    },

    /*/
     *  CALL TYPE: Query
     *  REQUIREMENT(S): Type String : IS REQUIRED
     *  @PARAM(S): {$id} of Type String
     *  @RETURN TYPE: JSON OBJECT OF SPECIFIC TODOITEM
     *  DESCRIPTION: returns a TodoItem matching the unique key identifier
     *  provided by $id from the database
    /*/
    FindTodoItem(obj, { id }, context){
      return TodoItem.findOne({
        _id: id
      })
    }
  },

  Mutation: {

    /*/
     *  CALL TYPE: Mutation (creating)
     *  REQUIREMENT(S): Type String : IS REQUIRED;
     *  @PARAM(S): {$content} of Type String; {$parent} of Type String;
     *  @RETURN TYPE: NONE
     *  DESCRIPTION: Creates a TodoItem with content that is a required String
     *  of a parent identifier to pair with the TodoObject that contains the
     *  related TodoItems nested inside. Also is assigned a false boolean for
     *  the key value pair completed. This then inserts it to the MongoDB
    /*/
    createTodoItem(obj, args, context){
      const TodoItemId = TodoItem.insert({
        content: args.content,
        parent: args.parent,
        completed: false
      });
      return TodoItem.findOne(TodoItemId)
    },

    /*/
     *  CALL TYPE: Mutation (deletion)
     *  REQUIREMENT(S): Type String : IS REQUIRED
     *  @PARAM(S): {$key} of Type String
     *  @RETURN:
     *  DESCRIPTION: Provides deletion of a specific TodoItem to the Database
     *  with its unique key identifier.
    /*/
    deleteTodoItem(obj, args, context){
      const RemoveTodoItemId = TodoItem.remove({
        _id: args.key
      });
      return TodoItem.findOne(RemoveTodoItemId)
    }
  }
}
