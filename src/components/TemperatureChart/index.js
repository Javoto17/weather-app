import React, { PureComponent } from 'react'
import { format, fromUnixTime } from 'date-fns'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import PropTypes from 'prop-types'

export default class TemperatureChart extends PureComponent {
  render () {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="x"
              name="Time"
              scale="time"
              domain={['dataMin', 'dataMax']}
              tickFormatter={(unixTime) => format(fromUnixTime(unixTime), 'Pp')}
              type="number"
            />
            <YAxis
              type="number"
              dataKey="y"
              name="temp"
              domain={[0, 'dataMax']}
            />
            <ZAxis type="number" range={[10, 10]} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter
              name="Temp"
              data={this.props.data.temp}
              fill="#f4605b"
              line
              shape="diamond"
            />
            <Scatter
              name="Min"
              data={this.props.data.temp_min}
              fill="#386ae8"
              line
              shape="star"
            />
            <Scatter
              name="Max"
              data={this.props.data.temp_max}
              fill="#31e184"
              line
              shape="cross"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

TemperatureChart.propTypes = {
  data: PropTypes.shape({
    temp_min: PropTypes.arrayOf(PropTypes.shape({})),
    temp_max: PropTypes.arrayOf(PropTypes.shape({})),
    temp: PropTypes.arrayOf(PropTypes.shape({}))
  })
}

TemperatureChart.defaultProps = {
  data: {}
}
