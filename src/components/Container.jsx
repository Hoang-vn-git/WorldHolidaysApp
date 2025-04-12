import React from 'react'
import Search from './Search'
import iso3311a2 from 'iso-3166-1-alpha-2'
import Display from './Display'

function Container() {
    let countries = iso3311a2.getCountries()
    let codeCountries = iso3311a2.getCode('Viet Nam')

    return (
        <div className="container">
            <h1>World Holidays</h1>
            <Search countries={countries} />
            <Display codeCountries={codeCountries} />
        </div>
    )
}

export default Container
