import React, { use, useState } from 'react'

function Search({ countries }) {
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleKeyDown = (e) => {
        
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
                    <div className='search'>
                        <input
                            onChange={handleInput}
                            className="form-control mr-sm-2"
                            placeholder="Search for a country"
                            list='countries'
                            value={inputValue}
                            onKeyDown={handleKeyDown}
                        />
                        {inputValue &&
                            <datalist id='countries'>
                                {countries.map((country, index) => {
                                    return (
                                        <option style={{ appearance: 'none' }} key={index} value={country}></option>
                                    )
                                })}
                            </datalist>}
                        <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default Search
