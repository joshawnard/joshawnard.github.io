import React, { Component, Proptypes } from 'react';
import WithStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.scss';

class Sidebar extends Component {
	render() {
		return (
			<div className={s.sidebar}>
      			{this.props.children}
			</div>
		);
	}
}

export default WithStyles (Sidebar, s);