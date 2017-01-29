import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Grid.scss';

class Grid extends Component {

  render() {
    return (
      <div>
        <h2>CSS Grid</h2>
        <div>
          <h3>Basic Grid</h3>
          <h4>3 columns</h4>
          <div className='grid-wrapper col-3'>
            <div className='grid-item'>a</div>
            <div className='grid-item'>b</div>
            <div className='grid-item'>c</div>
          </div>

          <h4>4 columns</h4>
          <div className='grid-wrapper col-4'>
            <div className='grid-item'>a</div>
            <div className='grid-item'>b</div>
            <div className='grid-item'>c</div>
            <div className='grid-item'>d</div>
          </div>

          <h4>5 columns</h4>
          <div className='grid-wrapper col-5'>
            <div className='grid-item'>a</div>
            <div className='grid-item'>b</div>
            <div className='grid-item'>c</div>
            <div className='grid-item'>d</div>
            <div className='grid-item'>e</div>      
          </div>
        </div>

      </div>
    );
  }

}

export default withStyles(Grid, styles)
