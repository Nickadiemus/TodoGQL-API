import TodoItem from "./TodoItem";

export default {
  Query: {
    TodoItems(){
      return TodoItem.find({}).fetch();
    },
    FindTodoItem(obj, { id }, context){
      console.log(id);
      return TodoItem.findOne({
        _id: id
      })
    }
  },

  Mutation: {
    createTodoItem(obj, args, context){
      console.log('These are the arguments');
      console.log(args);
      const TodoItemId = TodoItem.insert({
        content: args.content,
        parent: args.parent,
        completed: false
      });
      console.log(TodoItemId);
      return TodoItem.findOne(TodoItemId)
    },
    deleteTodoItem(obj, args, context){
      console.log("Got to TodoItem");
      const RemoveTodoItemId = TodoItem.remove({
        _id: args.key
      });
      return TodoItem.findOne(RemoveTodoItemId)
    }
  }
}
