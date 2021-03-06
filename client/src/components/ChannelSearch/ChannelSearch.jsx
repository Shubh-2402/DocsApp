import React, { useState } from 'react'
import { SearchIcon } from '../../assets/SearchIcon'
import "./ChannelSearch.css"

function ChannelSearch() {

    const [query, setQuery] = useState("")
    const [loading,setLoading]=useState(false)

    const onSearch = (event) =>{
        event.preventDefault()

        setLoading(true)
        setQuery(event.target.value)
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>

                <input
                    className="channel-search__input__text"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </div>   
        </div>
    )
}

export default ChannelSearch
