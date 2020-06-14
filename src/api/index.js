import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

//dealing with promises with async / await
export const virusData = async (country) => {
    let dynamicUrl = url;

    if (country) {
        dynamicUrl = `${url}/countries/${country}`
    }
    try {
        //destructure the data object with info needed
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(dynamicUrl)
        //object with only the info needed from data
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        console.log(error)
    }
}

export const virusDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        //return an object for each instance
        const returnedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return returnedData

    } catch (error) {
        console.log(error)
    }
}

export const countriesName = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}

