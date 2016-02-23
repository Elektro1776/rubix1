import classNames from 'classnames';
import { Link } from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'usercommon/usersidebar';
import Footer from 'common/footer';

import LoremIpsum from 'global/jsx/loremipsum';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invited: this.props.invited ? true : false,
      invitedText: this.props.invited ? 'invited' : 'invite'
    };
  }
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      invited: !this.state.invited,
      invitedText: (!this.state.invited) ? 'invited': 'invite'
    });
  }
  render() {
    return (
      <tr>
        <td style={{verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}}>
          <img src={'/imgs/avatars/'+this.props.avatar+'.png'} />
        </td>
        <td style={{verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}}>
          {this.props.name}
        </td>
        <td style={{verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}} className='text-right'>
          <Button onlyOnHover bsStyle='orange' active={this.state.invited} onClick={this.handleClick.bind(this)}>
            {this.state.invitedText}
          </Button>
        </td>
      </tr>
    );
  }
}

class MainChart extends React.Component {
  componentDidMount() {
    var chart = new Rubix('#main-chart', {
      width: '100%',
      height: 300,
      title: 'Chart of Total Use',
      titleColor: '#2EB398',
      subtitle: 'Period: 2015 and 2018',
      subtitleColor: '#2EB398',
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
      name: 'Total Users',
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


class SocialSwitches extends React.Component {
  componentDidMount() {
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function(html) {
      var switchery = new Switchery(html);
    });
  }
  render() {
    return (
      <Table className='panel-switches' collapsed>
        <tbody>
          <tr>
            <td>
              <Icon glyph='icon-fontello-twitter' className='fg-blue' /><span className='text-uppercase panel-switches-text'>twitter</span>
            </td>
            <td className='panel-switches-holder'><input type='checkbox' className='js-switch' defaultChecked /></td>
          </tr>
          <tr>
            <td>
              <Icon glyph='icon-fontello-facebook' className='fg-darkblue' /><span className='text-uppercase panel-switches-text'>facebook</span>
            </td>
            <td className='panel-switches-holder'><input type='checkbox' className='js-switch' /></td>
          </tr>
          <tr>
            <td>
              <Icon glyph='icon-fontello-gplus' className='fg-deepred' /><span className='text-uppercase panel-switches-text'>google+</span>
            </td>
            <td className='panel-switches-holder'><input type='checkbox' className='js-switch' /></td>
          </tr>
          <tr>
            <td>
              <Icon glyph='icon-fontello-linkedin' className='fg-deepred' /><span className='text-uppercase panel-switches-text'>linkedin</span>
            </td>
            <td className='panel-switches-holder'><input type='checkbox' className='js-switch' defaultChecked /></td>
          </tr>
          <tr>
            <td>
              <Icon glyph='icon-fontello-instagram' className='fg-deepred' /><span className='text-uppercase panel-switches-text'>instagram</span>
            </td>
            <td className='panel-switches-holder'>
              <Button bsStyle='primary'>connect</Button>
            </td>
          </tr>
        </tbody>
      </Table>
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
