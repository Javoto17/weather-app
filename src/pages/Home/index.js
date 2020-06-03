import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import MainLayout from '../../components/Layout'
import Card from '../../components/Card'

import { fetchForeCast } from '../../store/forecast/actions'

function Home ({ forecastList, fetchForeCast }) {
  useEffect(() => {
    fetchForeCast()
  }, [fetchForeCast])
  console.log(forecastList)
  return (
    <MainLayout>
      <h1 className="Home-title">Weather App</h1>
      <div>
        <Card>hola</Card>
        <Card>hola</Card>
        <Card>hola</Card>
        <Card>hola</Card>
        <Card>hola</Card>
      </div>
    </MainLayout>
  )
}

Home.propTypes = {}

const mapStateToProps = (state) => ({
  forecastList: state.forecast.data
})

const mapDispatchToProps = {
  fetchForeCast
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
