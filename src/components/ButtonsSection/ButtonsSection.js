import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './ButtonsSection.scss';

class ButtonsSection extends Component {

  render() {

    return (
      <div>
        <div>
          <h3>Buttons</h3>
          <button className='button btn-primary'>Primary Button</button> <br></br>
          <button className='button btn-secondary'>Secondary Button</button> <br></br>

          <div className='button-bar'>
            <button className='button'>Button 1</button>
            <button className='button'>Button 2</button>
            <button className='button'>Button 3</button>
          </div>
        </div>

        <hr></hr>

        <div style={{ width: '500px'}}>
          <h3>Typography</h3>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>

          <hr></hr>

          <p>This is a paragraph. Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.</p>
          <p>Il trouve ses racines dans une oeuvre de la littérature latine classique, le Lorem Ipsum ce sont tres bonne.</p>

          <hr></hr>

        </div>
      </div>
    );
  }

}

export default withStyles(ButtonsSection, styles)
