import classNames from 'classnames';
import { Link } from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import LoremIpsum from 'global/jsx/loremipsum';


class MainChart extends React.Component {
  componentDidMount() {
    var chart = new Rubix('#main-chart', {
      width: '100%',
      height: 300,
      title: 'Class Attendance',
      titleColor: '#2EB398',
      axis: {
        x: {
          type: 'datetime',
          tickCount: 3,
          label: 'Time',
          labelColor: '#2EB398'
        },
        y: {
          type: 'linear',
          tickFormat: 'd',
          tickCount: 2,
          labelColor: '#2EB398'
        }
      },
      tooltip: {
        color: '#55C9A6',
        format: {
          y: '.0f',
          x: '%x'
        }
      },
      margin: {
        top: 25,
        left: 50,
        right: 25
      },
      interpolate: 'linear',
      master_detail: true
    });

    var total_users = chart.area_series({
      name: 'Class Attendance',
      color: '#2EB398',
      marker: 'circle',
      fillopacity: 0.7,
      noshadow: true
    });

    chart.extent = [1297110663*1100+(86400000*5*(.35*40)), 1297110663*1125+(86400000*20*(.66*40))];

    var t = 1297110663*1100;
    var v = [ 10,20, 40, 60, 80, 90, 100, 110, 110, 110, 120, 115, 85, 90, 70, 60, 80, 90, 100, 110, 60, 80, 90, 100, 110,60, 80, 90,];

    var getValue = function() {
      var val = v.shift();
      v.push(val);
      return val;
    }

    var data = d3.range(40).map(function() {
      return {
        x: (t+=(86400000*35)),
        y: getValue()
      };
    });

    total_users.addData(data);
  }
  render() {
    return (
      <PanelBody style={{paddingTop: 5}}>
        <div id='main-chart'></div>
      </PanelBody>
    );
  }
}





class Calendar extends React.Component {

  componentDidMount() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function() {
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      }
    })
  }

    render() {
    return <div id="calendar"></div>;
  }
}




class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <MainChart />
                </Panel>
             
              </PanelContainer>
            </Col>
          </Row>
          <Row>
           <Col sm={7}>
              <Calendar />
           </Col>
           <Col>
           <FormGroup>
            <Label control sm={3} htmlFor='multiselecthorizontal'>Select A Class</Label>
                <Col sm={3}>
                     <Select className="bg-blue" id='multiselecthorizontal' multiple>
                        <option value='1'>Option 1</option>
                         <option value='2'>Option 2</option>
                         <option value='3'>Option 3</option>
                         <option value='4'>Option 4</option>
                           <option value='5'>Option 5</option>
                      </Select>
                 </Col>
           </FormGroup>
             <FormGroup>
              <Label control sm={3} htmlFor='inlineinputgroup'>Total Class Attendance</Label>
                 <Col sm={4}>
                     <InputGroup>
                     <InputGroupAddon>
                     <Icon glyph='icon-fontello-star-3' />
                     </InputGroupAddon>
                  <Input type='email' id='inlineinputgroup' placeholder='Attendance' className='inline' />
                     </InputGroup>
                     <br/>
                          <div>
                            <Button outlined bsStyle='lightblue'>cancel</Button>{' '}
                            <Button outlined bsStyle='lightblue'>submit</Button>
                          </div>
                          <br/>
                 </Col>
              </FormGroup>

                      

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
    var classes = classNames('dashboard', {
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
