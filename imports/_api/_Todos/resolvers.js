import TodoObject from './TodoObject';
import TodoItem from '../_TodoItems/TodoItem.js'

export default {
  Query: {
    TodoObjects(){
      return TodoObject.find({}).fetch();
    },
    GetTodoObject(obj, args, context){
      console.log(args);
      temp = TodoObject.find({}).fetch();
      console.log(temp);
      // for(i = 0; i < temp.length)
      
    }
  },

  TodoObject: {
    items: todoitems => {
      return TodoItem.find({
        TodoObjectId: todoitems._id
      }).fetch();
    }
  },

  Mutation: {
    //data passed through mutation
    //Req: String Type
    createTodoObject(obj, args, context) {
      console.log(args.name);
      const TodoObjectId = TodoObject.insert({
        name: args.name
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

      return TodoObject.findOne(RemoveTodoObjectId)
    }
  }
}
