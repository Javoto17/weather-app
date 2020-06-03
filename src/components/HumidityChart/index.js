import React, { PureComponent } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { format, fromUnixTime } from 'date-fns'
import PropTypes from 'prop-types'

const toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}%`
const renderTooltipContent = (o) => {
  const { payload } = o
  return (
    <div className="customized-tooltip-content">
      <ul className="list">
        {payload &&
          payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: '#ffffff' }}>
              {`${entry.name}: ${entry.value}(${toPercent(entry.value)})`}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default class HumidityChart extends PureComponent {
  render () {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={this.props.data}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            name="Time"
            scale="time"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(unixTime) => format(fromUnixTime(unixTime), 'Pp')}
            type="number"
          />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area
            type="monotone"
            dataKey="humidity"
            stroke="#386ae8"
            fill="#386ae8"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

HumidityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      humidity: PropTypes.number
    })
  )
}

HumidityChart.defaultProps = {
  data: []
}
