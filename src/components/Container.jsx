import React, { useState } from 'react'
import Search from './Search'
import iso3311a2 from 'iso-3166-1-alpha-2'
import Display from './Display'

function Container() {
    const [value, setValue] = useState('Canada')

    const getInput = (input) => {
        setValue(input)
    }
    let countries = iso3311a2.getCountries()
    let codeCountries = iso3311a2.getCode(value)
    return (
        <div className="container">
            <h1>Upcoming World Holidays</h1>
            <Search countries={countries} getInput={getInput} />
            <Display codeCountries={codeCountries} />
        </div>
    )
}

export default Container
