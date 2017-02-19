import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LivingStyle.scss';

const title = 'Living Style Guide Example';

class LivingStyle extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>Living style stuff here.</p>
        </div>
      </div>
    );
  }

}

export default withStyles(LivingStyle, s);
