import TodoObject from './TodoObject';
import TodoItem from '../_TodoItems/TodoItem.js'

export default {
  Query: {
    TodoObjects(){
      return TodoObject.find({}).fetch();
    },
    FindTodoObject(obj, { id }, context){
      console.log(id);
      return TodoObject.findOne({
        _id: id
      })
    }
  },

  TodoObject: {
    items: todoitems => {
      console.log(todoitems);
      return TodoItem.find({
        parent: todoitems._id
      }).fetch();
    }
  },
 
  Mutation: {
    //data passed through mutation
    //Req: String Type
    createTodoObject(obj, args, context) {
      console.log(args.name);
      const TodoObjectId = TodoObject.insert({
        name: args.name,
        completed: false
      })
      return TodoObject.findOne(TodoObjectId);
    },

    //data passed through mutation with key assigned to the TodoObject
    //Req: String Type
    deleteTodoObject(obj, args, context) {
      console.log(args.key)
      const RemoveTodoObjectId = TodoObject.remove({
        _id: args.key
      });
      const CascadeRemoveTodoItem = TodoItem.remove({
        parent: args.key
      })

      return TodoObject.findOne(RemoveTodoObjectId)
    }
  }
}
