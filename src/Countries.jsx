import React, {useState, useEffect} from 'react';
import { Form, Select } from 'antd';
import {countriesName} from './api'

const { Option } = Select;

const Countries = ({ handleCountryChange }) => {

const[fetchedCountries, setFetchCountriesList] = useState([])

useEffect(() => {
    const fetchCountriesList = async () => {
        setFetchCountriesList(await countriesName())
    }
    fetchCountriesList()
}, [setFetchCountriesList])
// console.log(fetchedCountries)
//will re render when set fetched countries changes which enables the ability to pick different countries
    return (
        <div>
            <Form style={{margin: '2rem'}}>
                <Select defaultValue='Global Data' onChange={value => handleCountryChange(value)} dropdownStyle={{backgroundColor: '#bdbdbd'}} >
                   
                    {fetchedCountries.map((country, i) =>  <Option key={i} value={country}>{country}</Option>)}
                </Select>
            </Form>
            </div>
    )
}

export default Countries