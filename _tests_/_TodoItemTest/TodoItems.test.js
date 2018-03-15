const { FetchTodoItems, FetchSingleTodoItem } = require('./TodoItems');
const id = 'mb4zcsEbGwzA6XuTz';


/*/
 *  Type of Test: Query Snapshot
 *  Proves: graphql Endpoint returns actual data equal to a snapshot
 *  @param(s): none
 *  Description: an asynchronous call to the localhost:3000/graphql Endpoint
 *  that will verify by a snapshot the query matches the response given

 NOTE: TodoItems must be populated before this test can be ran
/*/


test('test call FetchTodoItems', async () => {
  const data = await FetchTodoItems();
  console.log(data);
  expect(data).toMatchSnapshot();
})

/*/
 *  Type of Test: Query Snapshot
 *  Proves: graphql Endpoint returns actual data equal to a snapshot
 *  @param(s): id
 *  Description: an asynchronous call to the localhost:3000/graphql Endpoint
 *  that will verify a single TodoItem by a snapshot the query matches the response
 *  given

 NOTE: TodoItems must be populated before this test can be ran and an id must
 be provided
/*/

test('test call for FetchSingleTodoItem(id)', async () => {
  const data = await FetchSingleTodoItem(id);
  expect(data).toMatchSnapshot();
})

/*/
 *  Type of Test: Unit Testing
 *  Proves: data returned from API are corresponding to defined schemas
 *  @param(s): none
 *  Description: an asynchronous call to the localhost:3000/graphql Endpoint
 *  that will unit test every expected unit of TodoItem

 NOTE: TodoItems must be populated before this test can be ran
/*/


it('Unit Test for all TodoItems on Request', async () => {
  const data = await FetchTodoItems();
  count = 0;
  data.data.TodoItems.forEach(item => {
    expect(typeof(item._id)).toBe('string');
    expect(typeof(item.parent)).toBe('string');
    expect(typeof(item.content)).toBe('string');
    expect(typeof(item.completed)).toBe('boolean');
    count++;
  })
  console.log("Loop(s): " + count);
})
