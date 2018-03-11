import { Mongo } from "meteor/mongo";

const TodoItem = new Mongo.Collection("TodoItems");

export default TodoItem;
