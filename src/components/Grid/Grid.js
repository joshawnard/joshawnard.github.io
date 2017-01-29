import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Grid.scss';

class Grid extends Component {

  render() {
    return (
      <div>
        <div className='red'>
          <div className='wrapper'>
            <div className='box a'>a</div>
            <div className='box b'>b</div>
            <div className='box c'>c</div>
            <div className='box d'>d</div>
            <div className='box e'>e</div>
            <div className='box f'>f</div>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Grid, styles)
