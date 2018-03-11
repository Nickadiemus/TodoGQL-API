import {Mongo} from 'meteor/mongo';
//
const TodoObject = new Mongo.Collection("TodoObjects")

export default TodoObject;
