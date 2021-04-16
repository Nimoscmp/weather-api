import { Fragment } from "react";
import { useEffect, useState } from "react";

const CountriesAPI = ({setDataLoaded, dataloaded}) => {

    const [countriesresp, setCountriesResp] = useState([]);
    const [countriesShort, setCountriesShort] = useState([]);
    const [countriesSorted, setCountriesSorted] = useState([]);

    useEffect(() => {
        
        const searchCountries = async() => {
            const base_url = 'https://restcountries.eu/rest/v2/all';
    
            const response = await fetch(base_url);
            const result = await response.json();
    
            setCountriesResp(result);
        }

        searchCountries();

        setDataLoaded(true);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setCountriesShort(
            countriesresp.map(item => ({
                numCode: item.numericCode,
                alphaCode: item.alpha2Code,
                name: item.translations.es ? item.translations.es : item.name
            }))
        );
    }, [dataloaded, countriesresp])

    useEffect(() => {       

        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const countryA = a.name.toUpperCase();
            const countryB = b.name.toUpperCase();
          
            let comparison = 0;
            if (countryA > countryB) {
              comparison = 1;
            } else if (countryA < countryB) {
              comparison = -1;
            }
            return comparison;  
        }

        let arraySorted = countriesShort.sort(compare);
          
        setCountriesSorted(arraySorted.map(item => ({...item})))

        
        // eslint-disable-next-line
    }, [countriesShort])

    return ( 
        <Fragment>
            {countriesSorted.map(item => (
                <option
                    key={item.numCode}
                    value={item.alphaCode}
                >{item.name}</option>
            ))}
        </Fragment>
        
    );
}
 
export default CountriesAPI;