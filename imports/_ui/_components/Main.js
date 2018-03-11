/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import {Switch, Route} from 'react-router-dom';

/** component import(s)                                                 */
import Start from '../_layouts/Start';
import Home from '../_layouts/Home';
import TodoLists from '../_layouts/TodoLists';
/** style import(s)                                                     */



/*/
 *  Component: Main
 *  @props {n/a}
 *  @EventHandler(s): None
 *  @Description: Router component that listens for Link requests
 *  from react-router-dom to load different components with the
 *  respected route
/*/
const Main = () => (
  <main>
    <Switch>
      <Route exact path = "/" component = {Start} />
      <Route exact path = "/home" component = {Home} />
      <Route exact path = "/TodoLists/:id" component = {TodoLists} />
    </Switch>
  </main>
)

export default Main;
