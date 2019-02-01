import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class SideNavPage extends Component {
  render() {
    return (
      <div id="slide-out" className="side-nav sn-bg-4 fixed">
        <ul className="custom-scrollbar">
          <li>
            <div className="logo-wrapper waves-light">
              <a href="#">
                <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" className="img-fluid flex-center" />
              </a>
            </div>
          </li>
          <li>
            <ul className="social">
              <li><a className="icons-sm fb-ic"><i className="fa fa-facebook"> </i></a></li>
              <li><a className="icons-sm pin-ic"><i className="fa fa-pinterest"> </i></a></li>
              <li><a className="icons-sm gplus-ic"><i className="fa fa-google-plus"> </i></a></li>
              <li><a className="icons-sm tw-ic"><i className="fa fa-twitter"> </i></a></li>
            </ul>
          </li>
          <li>
            <form className="search-form" role="search">
              <div className="form-group md-form mt-0 pt-1 waves-light">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
          </li>
          <li>
            <ul className="collapsible collapsible-accordion">
              <li><a className="collapsible-header waves-effect arrow-r"><i className="fa fa-chevron-right"></i> Submit
                  blog<i className="fa fa-angle-down rotate-icon"></i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a className="waves-effect">Submit listing</a>
                    </li>
                    <li><a className="waves-effect">Registration form</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a className="collapsible-header waves-effect arrow-r"><i className="fa fa-hand-pointer-o"></i>
                  Instruction<i className="fa fa-angle-down rotate-icon"></i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a className="waves-effect">For bloggers</a>
                    </li>
                    <li><a className="waves-effect">For authors</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a className="collapsible-header waves-effect arrow-r"><i className="fa fa-eye"></i> About<i className="fa fa-angle-down rotate-icon"></i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a className="waves-effect">Introduction</a>
                    </li>
                    <li><a className="waves-effect">Monthly meetings</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a className="collapsible-header waves-effect arrow-r"><i className="fa fa-envelope-o"></i> Contact me<i
                    className="fa fa-angle-down rotate-icon"></i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a className="waves-effect">FAQ</a>
                    </li>
                    <li><a className="waves-effect">Write a message</a>
                    </li>
                    <li><a className="waves-effect">FAQ</a>
                    </li>
                    <li><a className="waves-effect">Write a message</a>
                    </li>
                    <li><a className="waves-effect">FAQ</a>
                    </li>
                    <li><a className="waves-effect">Write a message</a>
                    </li>
                    <li><a className="waves-effect">FAQ</a>
                    </li>
                    <li><a className="waves-effect">Write a message</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sidenav-bg mask-strong"></div>
      </div>
    );
  }
}

export default withRouter(SideNavPage)