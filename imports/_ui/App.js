/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

/** component import(s)                                                 */
import Navbar from './_components/Navbar';
import Main from './_components/Main';
import Footer from './_components/Footer'
/** style import(s)                                                     */


/*/
 *  Component: App
 *  @props {data}
 *  @EventHandler(s): None
 *  @Description: This is the sub root of the application which acts
 *  as the container for the application
/*/
const App = ({data}) => {
  return(
    <div >
      <Navbar />
      <div className = "container">
        <Main />
      </div>
      <Footer />
    </div>
  );
}


export default App;
