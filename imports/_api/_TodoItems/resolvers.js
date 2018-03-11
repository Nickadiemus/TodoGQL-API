import TodoItem from "./TodoItem";

export default {
  Query: {
    TodoItems(){
      return TodoItem.find({}).fetch();
    }
  },

  Mutation: {
    createTodoItem(obj, args, context){
      console.log("Got to TodoItem");
      const TodoItemId = TodoItem.insert({
        content: args.name,
        TodoObjectid: args.TodoObjectId,
        completed: false
      });
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
