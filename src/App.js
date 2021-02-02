import React from 'react'
import {connect} from 'react-redux'
import './App.css'
import Cards from './components/cards'
import Charts from './components/charts'
import CountryPicker from './components/countryPicker'
import CovidApi from './api'
import Button from '@material-ui/core/Button';

function App(props) {
  React.useEffect(() => {
    updateData();
  }, []);
  
  const updateData = async () => {
    const apiData = await CovidApi.getAllInfo();
    props.addCovidInfo(apiData);
  }

  const newCountryData = async () => {
    const c = prompt('Add country name', '')
    const apiData = await CovidApi.getCountryData(c);
    console.log(apiData);
    props.addCountryData(apiData, c)
  }

  console.log(props)

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Covid-19 statisticks
        </h3>
        <Cards />

        <Button onClick={updateData} variant="contained" color="primary">Обновить данные</Button>
        <Button onClick={newCountryData} variant="contained" color="primary">Страна</Button>
      </header>

      <section>
        <CountryPicker />
        <Charts />
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  return {...state.rootReducer}
}

function mapDispatchToProps(dispatch) {
  return {
    addCovidInfo: (newState) => dispatch({type: 'NEW_COVID_INFO', newState}),
    addCountryData: (newState, country) => dispatch({type: 'NEW_COUNTRY_STATISTICS', newState, country}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
