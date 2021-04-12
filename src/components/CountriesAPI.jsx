import { useState } from "react";


const CountriesAPI = () => {

    const [countriesresp, setCountriesResp] = useState({});
    const [load, setLoad] = useState(false);

    const searchCountries = async() => {
        const base_url = 'https://restcountries.eu/rest/v2/all';

        const response = await fetch(base_url);
        const result = await response.json();

        setCountriesResp(result);
        setLoad(true);
    }

    return ( 
        <>
            <button onClick={searchCountries}>Click</button>
        </>
    );
}
 
export default CountriesAPI;