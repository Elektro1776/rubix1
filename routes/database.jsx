import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

class Body extends React.Component {
  componentDidMount() {
    $('#example')
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table id='example' className='display' cellSpacing='0' width='100%'>
                            <thead>
                              <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>User Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>User Level</th>
                              </tr>
                            </thead>
                         
                            <tbody>
                              <tr>
                                <td>Jim</td>
                                <td>Reynolds</td>
                                <td>Jimmy</td>
                                <td>720-300-3939</td>
                                <td>jim@groupxinc.com</td>
                                <td>10</td>
                              </tr>
                              <tr>
                                <td>Jennifer </td>
                                <td>Acosta</td>
                                <td>Jen1234</td>
                                <td>000-000-000</td>
                                <td>blah@blah.com</td>
                                <td>8</td>
                              </tr>
                               <tr>
                                <td>Austin</td>
                                <td>Reynolds</td>
                                <td>Elektro</td>
                                <td>720-254-7156</td>
                                <td>austin@groupxinc.com</td>
                                <td>10</td>
                              </tr>
                              <tr>
                                <td>Jennifer </td>
                                <td>Acosta</td>
                                <td>Jen1234</td>
                                <td>000-000-000</td>
                                <td>blah@blah.com</td>
                                <td>8</td>
                              </tr>
                             
                            </tbody>
                          </Table>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
