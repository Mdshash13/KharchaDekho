import './Chart.css';
import Chart_Bar from './Chart_Bar'


const Chart = (props) => {

    const dataPointsValue = props.dataPoints.map(dataPoints => dataPoints.value);
    const barMax = Math.max(...dataPointsValue);

    return (
              <div className='chart'>
                {props.dataPoints.map((dataPoints) => (
                  <Chart_Bar
                  key = {dataPoints.label}
                  value = {dataPoints.value}
                  maxValue = {barMax}
                  label = {dataPoints.label}
                  />
                ))}
              </div>
    );
};

export default Chart;