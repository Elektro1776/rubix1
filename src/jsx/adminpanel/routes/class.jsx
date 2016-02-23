import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

class Body extends React.Component {
  componentDidMount() {
    $('.tablesaw').table();
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              
              
              <PanelContainer noOverflow controlStyles='bg-brown50 fg-white'>
                <Panel>
                  <PanelHeader className='bg-blue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h2>Overview</h2>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                       
                          <Table striped bordered className='tablesaw' data-sortable data-sortable-switch>
                            <thead>
                              <tr>
                                <th data-sortable-col data-sortable-default-col>Rank</th>
                                <th data-sortable-col>Title</th>
                                <th id='third' data-sortable-col>Description</th>
                                <th data-sortable-col><abbr title='Rotten Tomato Rating'>Instructor</abbr></th>
                                <th>Run Time</th>
                                <th data-sortable-col data-sortable-numeric>YouTube Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td><a href='http://en.wikipedia.org/wiki/Citizen_Kane' data-rel='external'>Fuck YOu</a></td>
                                <td>1941</td>
                                <td>100%</td>
                                <td>74</td>
                                <td>$2M</td>
                              </tr>
                        
                              <tr>
                                <th>8</th>
                                <td><a href='http://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)' data-rel='external'>The Wizard of Oz</a></td>
                                <td>1939</td>
                                <td>90%</td>
                                <td>72</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>9</th>
                                <td><a href='http://en.wikipedia.org/wiki/Singin%27_in_the_Rain' data-rel='external'>Singin in the Rain</a></td>
                                <td>1952</td>
                                <td>89%</td>
                                <td>85</td>
                                <td>$1M</td>
                              </tr>
                              <tr>
                                <th>10</th><td className='title'><a href='http://en.wikipedia.org/wiki/Inception' data-rel='external'>Inception</a></td>
                                <td>2010</td>
                                <td>84%</td>
                                <td>78</td>
                                <td>$1M</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
             <Row>
              <Col sm={12}>
              <PanelContainer noOverflow controlStyles='bg-darkblue fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Add A Class!</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form horizontal>
                
                            <FormGroup>
                              <Label control sm={3} htmlFor='inlineinputgroup'>Class Title</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-video-1' />
                                  </InputGroupAddon>
                                  <Input type='email' id='inlineinputgroup' placeholder='Title' className='inline' />
                                 
                                </InputGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                             <Label control sm={3} htmlFor='inlineinputgroupmail'>Instructor</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-dripicons-user' />
                                  </InputGroupAddon>
                                  <Input type='email' id='inlineinputgroupmail' placeholder='Name' />
                                </InputGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                          <Label control sm={3} htmlFor='inlineinputgroupmail'>Link To YouTube</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-dripicons-user' />
                                  </InputGroupAddon>
                                  <Input type='email' id='inlineinputgroupmail' placeholder='Name' />
                                </InputGroup>
                              </Col>
                              </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='horizontalpassword'>Length of Class</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <Input type='password' id='horizontalpassword' placeholder='Class Length' />
                               
                                </InputGroup>
                              </Col>
                            </FormGroup>
                               <FormGroup>
                              <Label control sm={3} htmlFor='textareahorizontal'>Description</Label>
                              <Col sm={9}>
                                <Textarea id='textareahorizontal' rows='3' placeholder='Description...' />
                              </Col>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-blue text-right'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div>
                            <Button outlined bsStyle='lightblue'>cancel</Button>{' '}
                            <Button outlined bsStyle='lightblue'>submit</Button>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              </Col>
              </Row>
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
