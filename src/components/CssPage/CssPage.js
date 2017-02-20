import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CssPage.scss';
import ButtonsSection from '../ButtonsSection';
import Grid from '../Grid';

const title = 'Css Playground';

class CssPage extends Component {

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
          <ButtonsSection></ButtonsSection>
          <Grid></Grid>
        </div>
      </div>
    );
  }

}

export default withStyles(CssPage, s);
