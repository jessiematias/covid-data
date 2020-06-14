import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import Chart from './Chart'
import Countries from './Countries'
import { Global } from '@emotion/core'
import { colors } from './global';
import { virusData } from './api'
import { Typography } from 'antd';
const { Text } = Typography;

const App = () => {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('')
    // const [country, setCountry] = useState('')

    useEffect(() => {
        //await because we are calling async func
        async function fetchData() {
            setData(await virusData())

        }
        fetchData()
    }, [])

    const handleCountryChange = async (country) => {
        setData(await virusData(country))
        setCountry(country)
    }
    
    return (
        <>
            <Global
                styles={{
                    'body': {
                        backgroundColor: `${colors.primaryGrey}`
                    },
                    '.container': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: 'white'
                    }
                }}
            />

            <div className='container'>
                <Text style={{marginTop: '1rem', color: '#d4d4d4', fontSize: '2rem', textAlign: 'center'}}>COVID-19 LATEST UPDATE</Text>
                <Countries handleCountryChange={handleCountryChange} />
                <Chart data={data} country={country}  />
            </div>
        </>
    )
}

export default App