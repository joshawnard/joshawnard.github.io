import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ArticleCard.scss';

class ArticleCard extends Component {

  static propTypes = {
    cardTitle: PropTypes.string.isRequired,
    cardAuthor: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardGenre: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="text-profile">
        <div className="text-inside">
          <div className="text-partial-title">
            <h2>{this.props.cardTitle}</h2>
            <h3>{this.props.cardAuthor}</h3>
          </div>
          <div className="text-partial-description">
            <p>{this.props.cardDescription}</p>
          </div>
          <div className="genre-ribbon ribbon">
              <span className="label label-primary">{this.props.cardGenre}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(ArticleCard, s);
