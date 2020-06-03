import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MainLayout from '../../components/Layout'
import Card from '../../components/Card'

import {
  fetchForeCast,
  updateTemparatures,
  updateHumidity,
  updatePressure
} from '../../store/forecast/actions'

import HumidityChart from '../../components/HumidityChart'
import WrapperChart from '../../components/WrapperChart'
import PressureChart from '../../components/PressureChart'
import TemperatureChart from '../../components/TemperatureChart'
import Spinner from '../../components/Spinner'

function Home ({
  temperatureData,
  fetchForeCast,
  pressureData,
  humidityData,
  updateTemparatures,
  updatePressure,
  updateHumidity,
  isLoading
}) {
  useEffect(() => {
    fetchForeCast()
  }, [fetchForeCast])

  return (
    <MainLayout>
      <h1 className="Home-title">Weather App</h1>
      {!isLoading ? (
        <div className="Home-grid-list">
          <Card>
            <WrapperChart
              onClickUpdate={updateTemparatures}
              title="Temperature"
            >
              <TemperatureChart data={temperatureData} />
            </WrapperChart>
          </Card>
          <Card>
            <WrapperChart onClickUpdate={updatePressure} title="Pressure">
              <PressureChart data={pressureData} />
            </WrapperChart>
          </Card>
          <Card>
            <WrapperChart onClickUpdate={updateHumidity} title="humidity">
              <HumidityChart data={humidityData} />
            </WrapperChart>
          </Card>
        </div>
      ) : (
        <Spinner />
      )}
    </MainLayout>
  )
}

Home.propTypes = {
  humidityData: PropTypes.arrayOf(PropTypes.shape({})),
  pressureData: PropTypes.arrayOf(PropTypes.shape({})),
  temperatureData: PropTypes.shape({}),
  fetchForeCast: PropTypes.func,
  updateTemparatures: PropTypes.func,
  updateHumidity: PropTypes.func,
  updatePressure: PropTypes.func,
  isLoading: PropTypes.bool
}

const mapStateToProps = (state) => ({
  humidityData: state.forecast.humidityData,
  pressureData: state.forecast.pressureData,
  temperatureData: state.forecast.temperatureData,
  isLoading: state.forecast.isLoading
})

const mapDispatchToProps = {
  fetchForeCast,
  updateTemparatures,
  updateHumidity,
  updatePressure
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
