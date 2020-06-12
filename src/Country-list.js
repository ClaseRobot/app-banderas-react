import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Country from './Country'

const CountryListStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    /* grid-auto-flow:  */
    background: var(--background);
    justify-content: center;
    padding: 4em 2em;
`

function CountryList() {
    const [countryList, setCountryList] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setCountryList(data)
            console.log(data);
        })
        .catch(() => {
            console.log('Hubo un error, que lastima!');
        })
    }, [])
    return (
        <CountryListStyled>
            {
                countryList.map(({ flag, name, population, region, capital }) => {
                    return (
                        <Country 
                            flag={ flag } 
                            name={ name }
                            key={ name }
                            population={ population }
                            region={ region }
                            capital={ capital }
                        />
                    )
                })
            }
        </CountryListStyled>
    )
}

export default CountryList

