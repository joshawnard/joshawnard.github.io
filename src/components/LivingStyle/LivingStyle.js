import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LivingStyle.scss';
import ArticleCard from '../interactive/ArticleCard';
import CLButton from '../interactive/CLButton';

// BOOTSTRAP COMPONENTS
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const title = 'Living Style Guide Example';

class LivingStyle extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.lsgcontainer}>
          <h1>{title}</h1>
          
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="clearfix">
                <Col sm={3}>
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="alerts">
                      Alerts
                    </NavItem>
                    <NavItem eventKey="buttons">
                      Buttons
                    </NavItem>
                    <NavItem eventKey="cards">
                      Cards
                    </NavItem>
                    <NavItem eventKey="dropdowns">
                      Dropdowns
                    </NavItem>
                    <NavItem eventKey="forms">
                      Forms
                    </NavItem>
                    <NavItem eventKey="icons">
                      Icons
                    </NavItem>
                    <NavItem eventKey="svg">
                      Svg
                    </NavItem>
                    <NavItem eventKey="tables">
                      Tables
                    </NavItem>
                    <NavItem eventKey="typography">
                      Typography
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="alerts">
                      <Alerts />
                    </Tab.Pane>
                    <Tab.Pane eventKey="buttons">
                      <Buttons />
                    </Tab.Pane>
                    <Tab.Pane eventKey="cards">
                      <Cards />
                    </Tab.Pane>
                    <Tab.Pane eventKey="dropdowns">
                      Dropdowns content
                    </Tab.Pane>
                    <Tab.Pane eventKey="forms">
                      Forms content
                    </Tab.Pane>
                    <Tab.Pane eventKey="icons">
                      Icons content
                    </Tab.Pane>
                    <Tab.Pane eventKey="svg">
                      Svg content
                    </Tab.Pane>
                    <Tab.Pane eventKey="tables">
                      Tables content
                    </Tab.Pane>
                    <Tab.Pane eventKey="typography">
                      <Typography />
                      Typography content
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

        </div>
      </div>
    );
  }
}

var Alerts = React.createClass({
  render: function() {
    return (
      <div id="alerts" className="alerts-section">
          <h1 className="callout">Alerts</h1>
      </div>
    );
  }
});

var Buttons = React.createClass({
  render: function() {
    return (
      <div id="buttons" className="button-section">
          <h1 className="callout">Buttons</h1>
          <Button bsStyle="success">Success</Button>
          <CLButton clbClass="clbutton">CLButton</CLButton>
          <CLButton clbClass="clbutton clb-ghost">CLButton</CLButton>
      </div>
    );
  }
});

var Cards = React.createClass({
  render: function() {
    return (
      <div id="cards" className="cards-section">
          <h1 className="callout">Cards</h1>
          <h3>Article Cards</h3>
          <ArticleCard cardTitle="Columbus"
                       cardAuthor="Joaquin Miller"
                       cardDescription="A rousing poem celebrating Columbus’s perseverance even when success was far from certain."
                       cardGenre="Poem" />
          <a href=""><Glyphicon glyph="align-right" /> Code Example</a>
          <hr></hr>
          <h3>Props</h3>
          <p>Use the <code>cardTitle</code>, <code>cardAuthor</code>, <code>cardDescription</code>, and <code>cardGenre</code>
           props to customize your Article Card.</p>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>cardTitle</code></td>
                <td>String</td>
                <td>yes</td>
                <td></td>
              </tr>
              <tr>
                <td><code>cardAuthor</code></td>
                <td>String</td>
                <td>yes</td>
                <td></td>
              </tr>
              <tr>
                <td><code>cardDescription</code></td>
                <td>String</td>
                <td>yes</td>
              </tr>
              <tr>
                <td><code>cardGenre</code></td>
                <td>String</td>
                <td>yes</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
      </div>
    );
  }
});

var Typography = React.createClass({
  render: function() {
    return (
      <div id="typography" className="typography-section">
        <h1 className="callout">Typography</h1>
        <p>This is a section on typography.  Refer to these rules to know when to use certain classes and callout styles.</p>
        <hr></hr>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>

        <h1 className="callout">Header 1</h1>
        <h2 className="callout">Header 2</h2>
        <h3 className="callout">Header 3</h3>
        <h4 className="callout">Header 4</h4>
        <h5 className="callout">Header 5</h5>
        <h6 className="callout">Header 6</h6>

        <hr></hr>

        <p>This is a paragraph. Contrairement à une opinion répandue, le Lorem Ipsum nest pas simplement du texte aléatoire.</p>

        <p>Il trouve ses racines dans une oeuvre de la littérature latine classique, le Lorem Ipsum ce sont tres bonne.</p>
      </div>
    );
  }
});

export default withStyles(LivingStyle, s);
