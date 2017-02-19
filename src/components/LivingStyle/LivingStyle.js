import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LivingStyle.scss';
import Sidebar from '../layout/Sidebar';
import ContentArea from '../layout/ContentArea';

// BOOTSTRAP COMPONENTS
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const title = 'Living Style Guide Example';

class LivingStyle extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.lsgcontainer}>
          <h1>{title}</h1>
            {/* <Sidebar>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">
                  Tab 1
                </NavItem>
                <NavItem eventKey="second">
                  Tab 2
                </NavItem>
              </Nav>
            </Sidebar> 
            <ContentArea></ContentArea>*/}


              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="clearfix">
                    <Col sm={4}>
                      <Nav bsStyle="pills" stacked>
                        <NavItem eventKey="first">
                          Alerts
                        </NavItem>
                        <NavItem eventKey="second">
                          Buttons
                        </NavItem>
                        <NavItem eventKey="third">
                          Dropdowns
                        </NavItem>
                        <NavItem eventKey="fourth">
                          Forms
                        </NavItem>
                        <NavItem eventKey="fifth">
                          Icons
                        </NavItem>
                        <NavItem eventKey="sixth">
                          Svg
                        </NavItem>
                        <NavItem eventKey="seventh">
                          Tables
                        </NavItem>
                        <NavItem eventKey="eighth">
                          Typography
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="first">
                          Alerts content
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          Buttons content <br />
                              <Button bsStyle="success">Success</Button>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          Dropdowns content
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          Forms content
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          Icons content
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                          Svg content
                        </Tab.Pane>
                        <Tab.Pane eventKey="seventh">
                          Tables content
                        </Tab.Pane>
                        <Tab.Pane eventKey="eighth">
                          <Typography />
                          Typography content
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>


              {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">
                    Tab 1 content
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Tab 2 content
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container> */ }
        </div>
      </div>
    );
  }
}

var Typography = React.createClass({
  render: function() {
    return (
      <div id="typography" className="typography-section">
          <h1 className="callout">Typography</h1>
          <p>This is a section on typography.  Refer to these rules to know when to use certain classes and callout styles.</p>


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

          <p>This is a paragraph. Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.</p>

          <p>Il trouve ses racines dans une oeuvre de la littérature latine classique, le Lorem Ipsum ce sont tres bonne.</p>
      </div>
    );
  }
});

export default withStyles(LivingStyle, s);
