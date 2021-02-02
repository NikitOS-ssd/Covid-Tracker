const url = process.env.REACT_APP_URL;

class CovidApi {
  static async getAllInfo() {
    try {
      const data = await fetch(url).then(res => res.json()).then(data => data);
      const modifiedData = {
        confirmed: data.confirmed,
        recovered: data.recovered,
        deaths: data.deaths,
        lastUpdate: data.lastUpdate,
      }
      return modifiedData
    } catch (error) {
      return error
    }
  }

  static async getCountryData(country) {
    try {
      const data = await fetch(url+'/countries/'+country).then(res => res.json()).then(data => data);
      return data
    } catch (error) {
      return error
    }
  }
}

export default CovidApi