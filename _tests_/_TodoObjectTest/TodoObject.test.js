//requires TodoObject.js modules
const {FetchTodoObjects, FetchSingleTodoObject } = require('./TodoObject')

//test id: must be changed if ran on another instance due to local DB
var id = "TtqWyeRJLbC67Hs7G";

/*/
 *  Type of Test: Query Snapshot
 *  Proves: graphql Endpoint returns actual data equal to a snapshot
 *  @param(s): none
 *  Description: an asynchronous call to the localhost:3000/graphql Endpoint
 *  that will verify by a snapshot the query matches the response given

 NOTE: TodoObjects must be populated before this test can be ran
/*/

test('test call for TodoObjects Request', async () => {
  const data = await FetchTodoObjects();
  expect(data).toMatchSnapshot();
});

/*/
 *  Type of Test: Query Snapshot
 *  Proves: graphql Endpoint returns actual data equal to a snapshot
 *  @param(s): id
 *  Description: an asynchronous call to the localhost:3000/graphql Endpoint
 *  that will verify a single TodoObject by a snapshot the query matches the response given

 NOTE: TodoObjects must be populated before this test can be ran and an id must
 be provided
/*/
test('test call for FetchSingleTodoObject Request', async () => {
  const data = await FetchSingleTodoObject(id);
  expect(data).toMatchSnapshot();
})

/*/
 *  Type of Test: Unit Testing
 *  Proves: data returned from API are corresponding to defined schemas
 *  @param(s): none
 *  Description: an asynchronous call to the localhost:3000/graphql Endpoint
 *  that will unit test every single expected unit of TodoObject and its TodoItems

 NOTE: TodoObjects must be populated before this test can be ran
/*/

it('Unit Test for all TodoObjects/TodoItems: no empty TodoObjects', async () => {
  const data = await FetchTodoObjects();
  count = 0;
  data.data.TodoObjects.forEach(item => {
    expect(typeof(item._id)).toBe('string');                //expects item._id to be a String Type
    expect(typeof(item.name)).toBe('string');               //expects item.name to be a String Type
    expect(typeof(item.completed)).toBe('boolean');         //expects item.completed to be a Boolean Type
    expect(typeof(item.items)).toBe('object');              //expects item.items to be a Array Type
    count++
    item.items.forEach(subItem => {
      expect(typeof(subItem._id)).toBe('string')            //expects subItem._id to be a String Type
      expect(typeof(subItem.parent)).toBe('string')         //expects subItem.parent to be a String Type
      expect(typeof(subItem.content)).toBe('string')        //expects subItem.content to be a String Type
      expect(typeof(subItem.completed)).toBe('boolean')     //expects subItem.completed to be a String Type
      count++
    })
  })
  console.log("Loop(s): " + count);
})
