/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */
import '../_style/footer.css'



/*/
 *  Component: Footer
 *  @props {n/a}
 *  @EventHandler(s): none
 *  @Description: abosolute
/*/
class Footer extends Component {
  render(){
    return(
      <footer className="page-footer blue lighten-3">
        <div className="footer-copyright blue lighten-3">
          <div className="container">
           2018 © fooji, inc. · patent pending
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
