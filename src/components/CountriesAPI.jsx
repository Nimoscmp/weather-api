import { Fragment } from "react";
import { useEffect, useState } from "react";

const CountriesAPI = ({setDataLoaded}) => {

    const [countriesresp, setCountriesResp] = useState([]);

    useEffect(() => {
        
        const searchCountries = async() => {
            const base_url = 'https://restcountries.eu/rest/v2/all';
    
            const response = await fetch(base_url);
            const result = await response.json();
    
            setCountriesResp(result);
            setDataLoaded(true);
        }

        searchCountries();

    }, [])

    return ( 
        <Fragment>
            {countriesresp.map(item => (
                <option
                    key={item.numericCode}
                    value={item.alpha2Code}
                >{item.translations.es ? item.translations.es : item.name}</option>
            ))}
        </Fragment>
        
    );
}
 
export default CountriesAPI;