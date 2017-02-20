import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Grid.scss';

class Grid extends Component {

  render() {

    // Takes number of columns and generates grid item wrapper and list
    var gridItems = function(col) {
      var cols = [];
      for (var i = 1; i <= col; i++) {
          cols.push(i);
      }  
      return (
        <div className={'grid-wrapper col-' + col}>
          { cols.map(function(col){
             return <div className='grid-item'>{col}</div>;
            })
          }
        </div>
      ); 
    };

    return (
      <div>
        <h2>CSS Grid</h2>
        <h3>Basic Grid</h3>

        <h4>Two Columns</h4>
        {gridItems(2)}

        <h4>Three Columns</h4>
        {gridItems(3)}

        <h4>Four Columns</h4>
        {gridItems(4)}

        <h4>Five Columns</h4>
        {gridItems(5)}

        <h4>Six Columns</h4>
        {gridItems(6)}

        <h4>Twelve Columns</h4>
        {gridItems(12)}
      </div>
    );
  }
}

export default withStyles(Grid, styles)
