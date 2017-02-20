import React, { Component, Proptypes } from 'react';
import WithStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContentArea.scss';

class ContentArea extends Component {
	render() {
		return (
			<div className={s.content}>
      			{this.props.children}
			</div>
		);
	}
}

export default WithStyles (ContentArea, s);