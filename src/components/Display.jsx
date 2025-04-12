import React, { useEffect, useState } from 'react'

function Display({ codeCountries }) {
    const [holiday, setHoliday] = useState([])
    const searchCountry = () => {
        fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${codeCountries}`)
            .then(res => res.json())
            .then((data) => {
                let eventCountry = data.map((country) => {
                    return (
                        {
                            date: country.date,
                            localName: country.localName,
                            globalName: country.name
                        }
                    )
                })
                setHoliday(eventCountry)
            })
        }

        useEffect(() => {
            searchCountry()
        },[])
    return (
        <div className='display-holiday'>
          {holiday.map((data) => {
            return (
                <div className="card" style={{ width: '10rem', flex: '50%' }}>
                <div className="card-body">
                    <div>
                        <i className="fa-solid fa-globe"></i>
                        <h4 className="card-title">{data.globalName}</h4>
                    </div>
                    <div>
                        <i className="fa-solid fa-calendar"></i>
                        <p className="card-title">Date: {data.date}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="card-text">Local name: {data.localName}</p>
                    </div>
                </div>
            </div>
            )
          })}
        </div>
    )
}

export default Display
