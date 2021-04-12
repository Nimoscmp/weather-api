import PropTypes from 'prop-types';

const ShowData = ({answer}) => {
    
    const {name, main, weather, wind} = answer;
    
    if(!name) return(
        <aside className="col-11 col-md-5 p-2"></aside>
    )

    return (  
        <>
            <aside className="col-11 col-md-5 p-2">
                    <div className="m-0 p-0 row rounded border" id="card">
                        <h3 className="m-0 p-2">
                            {name}
                            <img 
                                src={'http://openweathermap.org/img/w/' + weather[0].icon + '.png'} 
                                alt="clima"
                                className="mx-2"/>
                        </h3>
                        <div className="row m-1 p-0">
                            <span className="col-6 text-secondary p-0 px-1">Temperatura <h4 className="text-primary ps-2">{Math.round(main.temp)}&#8451;</h4></span>
                            <span className="col-6 text-secondary p-0 px-1">Sensación térmica <h4 className="text-primary ps-2">{parseInt(main.feels_like)}&#8451;</h4></span>
                            <span className="col-6 text-secondary p-0 px-1">Humedad <h5 className="text-dark ps-2">{Math.round(main.humidity)}%</h5></span>
                            <span className="col-6 text-secondary p-0 px-1">Viento <h5 className="ps-2">{(wind.speed * 3.6).toFixed(1)} km/h</h5></span>
                        </div>
                    </div>
            </aside>
        </>
    );
}
 
ShowData.propTypes = {
    answer: PropTypes.object.isRequired
}

export default ShowData;