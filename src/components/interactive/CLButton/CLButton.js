import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CLButton.scss';

class CLButton extends Component {

  static propTypes = {
    clbClass: PropTypes.string.isRequired
  };

  render() {
    return (
      <button className={this.props.clbClass}>
        {this.props.children}
      </button>
    );
  }

}

export default withStyles(CLButton, s);
