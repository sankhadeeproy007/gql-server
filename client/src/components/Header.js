import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  render() {
    const { fetching, user } = this.props.auth;
    return (
      <nav>
        <div
          className="nav-wrapper"
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          <Link to={user ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          {!fetching && (
            <ul className="right">
              {!user ? (
                <li>
                  <a href="/auth/google">Login with Google</a>
                </li>
              ) : (
                <Fragment>
                  <li>
                    <Payments />
                  </li>
                  <li style={{ margin: '0 10px' }}>Credits: {user.credits}</li>
                  <li>
                    <a href="/api/logout">Logout</a>
                  </li>
                </Fragment>
              )}
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
