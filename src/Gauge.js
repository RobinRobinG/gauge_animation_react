import React from 'react';
import SvgGauge from 'svg-gauge';
import './Gauge.css';

const defaultOptions = {
  animDuration: 2,
  showValue: true,
  dialStartAngle: 20,
  dialEndAngle: 160,
  min: 0,
  max: 100,
  color: value => {
    if (value < 20) {
      return '#5ee432'; // green
    } else if (value < 40) {
      return '#fffa50'; // yellow
    } else if (value < 60) {
      return '#f7aa38'; // orange
    } else {
      return '#ef4655'; // red
    }
  },
  label: value => Math.floor(value),
  valueClass: 'value-text wrap'
};

class Gauge extends React.Component {
  componentDidMount() {
    this.renderGauge(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { props } = this;
    if (props.value !== nextProps.value) {
      this.renderGauge(nextProps);
    }
    return false;
  }

  renderGauge(props) {
    const gaugeOptions = Object.assign({}, defaultOptions, props);
    if (!this.gauge) {
      this.gauge = SvgGauge(this.gaugeEl, gaugeOptions);
    }
    this.gauge.setValueAnimated(props.value, gaugeOptions.animDuration);
  }

  render() {
    return <div className='gauge-container' ref={el => (this.gaugeEl = el)} />;
  }
}

export default Gauge;
