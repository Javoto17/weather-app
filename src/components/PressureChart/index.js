import React, { PureComponent } from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import PropTypes from 'prop-types'
import { format, fromUnixTime } from 'date-fns'

export default class PressureChart extends PureComponent {
  render () {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={this.props.data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="time"
            name="Time"
            scale="time"
            domain={['auto', 'auto']}
            tickFormatter={(unixTime) => format(fromUnixTime(unixTime), 'Pp')}
            type="number"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="pressure"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="sea_level" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="grnd_level" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
}

PressureChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number
    })
  )
}

PressureChart.defaultProps = {
  data: []
}
