import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { handleToken } from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => this.props.handleToken(token)}
        name="Emaily"
        description="$5 for 5 emails"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleToken: token => dispatch(handleToken(token))
});

export default connect(null, mapDispatchToProps)(Payments);
