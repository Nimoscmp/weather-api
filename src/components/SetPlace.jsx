import { useState } from 'react';
// import { nanoid } from 'nanoid';
import CountriesAPI from './CountriesAPI';
import PropTypes from 'prop-types';

const SetPlace = ({saveExplore, setSubmit, submitting, waiting, setDataLoaded, dataloaded}) => {

    //Declare useState for search and error
    const [search, saveSearch] = useState({
        city: '',
        country: ''
    })

    const [error, setError] = useState(false);

    //Destructuring object
    const {city, country} = search;

    const handleChange = event => {

        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        } 

        saveSearch({
            ...search,
            [event.target.name]: removeAccents(event.target.value)
        });
        
    }

    //Event submit
    const validateForm = event => {
        event.preventDefault();

        if(city.trim() === '' || country === ''){
            setError(true);
            return;
        }

        //Set error to false after validating
        setError(false);
        //Send a copy of search state to app.js
        saveExplore({...search})
        //Set submit to true after validating
        setSubmit(true);
    }


    return (  
        <>
            <section className="col-11 col-md-5 p-0 rounded bg-light">
                {error?
                <div className="mx-0 my-1">
                    <span className="m-2 my-1 text-danger"><small>Los valores no son válidos</small></span>
                </div>
                :
                null
                }
                <form 
                    className="m-2"
                    onSubmit={validateForm}>
                    <div className="input-group m-2 mx-0">
                        <span className="input-group-text" id="input-country">País</span>
                        <select 
                            className="form-select"
                            name="country" 
                            aria-label="country"
                            onChange={handleChange}
                            value={country}>
                            <option value="">Elige un país</option>
                            <CountriesAPI
                                setDataLoaded={setDataLoaded}
                                dataloaded={dataloaded}
                            />                             
                        </select>
                    </div>

                    <div className="input-group m-2 mx-0">
                        <span className="input-group-text" id="input-city">Ciudad</span>
                        <input 
                            type="text"
                            name="city" 
                            id="city"
                            className="form-control" 
                            placeholder="Escribe una ciudad" 
                            aria-label="city" 
                            aria-describedby="input-city"
                            onChange={handleChange}/>
                    </div>

                    <div className="input-group m-2 mx-0 d-flex justify-content-end row">
                    <button
                        type="submit"
                        className="btn btn-primary my-2 col-12 col-sm-6"
                        disabled={waiting && submitting ? true : false}                 
                    >
                    {(waiting && submitting) ?
                    <> 
                        <span className="spinner-border spinner-border-sm mx-1"></span>
                        <span className="bg-primary text-white">Cargando...</span>
                    </>
                    : 
                        <span className="bg-primary text-white">Consultar</span>}     
                    </button>
                </div>
                </form>
            </section>
        </>
    );
}

SetPlace.propTypes = {
    saveExplore: PropTypes.func.isRequired,
    setSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    waiting: PropTypes.bool.isRequired
}
 
export default SetPlace;