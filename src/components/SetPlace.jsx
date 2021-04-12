import { useState } from 'react';
import { nanoid } from 'nanoid'

const SetPlace = ({explore, saveExplore}) => {

    //Array of countries
    const countries = [
        {name: 'Argelia', code: 'DZ'},
        {name: 'Argentina', code: 'AR'},
        {name: 'Colombia', code: 'CO'},
        {name: 'Dinamarca', code: 'DK'},
        {name: 'India', code: 'IN'},
        {name: 'Luxemburgo', code: 'LU'},
        {name: 'Pakistán', code: 'PK'},
        {name: 'Ruanda', code: 'RW'},
        {name: 'Sudáfrica', code: 'ZA'}
    ]

    countries.map(item => (
        item.id = nanoid()
    ))

    //Declare useState for search and error
    const [search, saveSearch] = useState({
        city: '',
        country: ''
    })

    const [error, setError] = useState(false);

    //Destructuring object
    const {city, country} = search;

    const handleChange = event => {
        saveSearch({
            ...search,
            [event.target.name]: event.target.value
        })
    }

    //Event submit
    const validateForm = event => {
        event.preventDefault();

        if(city.trim() === '' || country === ''){
            setError(true);
            return;
        }

        setError(false);
    }

    return (  
        <>
            <section className="col-12 col-md-6 p-0">
                {error?
                <div className="m-2 my-1">
                    <span className="m-2 my-1 text-danger"><small>Los valores no son válidos</small></span>
                </div>
                :
                null
                }
                <form 
                    className="m-2"
                    onSubmit={validateForm}>
                    <div className="input-group m-2">
                        <span className="input-group-text" id="input-country">País</span>
                        <select 
                            className="form-select"
                            name="country" 
                            aria-label="country"
                            onChange={handleChange}>
                            <option value="">Elige un país</option>
                            {
                                countries.map(item => (
                                    <option 
                                        key={item.id}
                                        value={item.code}
                                    >{item.name}</option>
                                ))
                            }    
                        </select>
                    </div>

                    <div className="input-group m-2">
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

                    <div className="input-group m-2 d-flex justify-content-end row">
                    <button
                        type="submit"
                        className="btn btn-primary my-2 col-6"                    
                    >Agregar</button>
                </div>
                </form>
            </section>
        </>
    );
}
 
export default SetPlace;