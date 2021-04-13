import PropTypes from 'prop-types';

const ShowData = ({answer}) => {
    
    const {name, main, weather, wind} = answer;

    if(!name) return(
        <aside className="col-11 col-md-5 p-2"></aside>
    )

    let hue1, hue2, sat, light, hex1, hex2;
    // hsl(Math.round(main.temp * (-1) * (5/3) + 83.33), 50, 50)

    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
          const k = (n + h / 30) % 12;
          const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
          return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    if(main){
        hue1 = Math.round(main.temp * (-1) * (230/40) + 210);
        hue2 = Math.round(main.feels_like * (-1) * (230/40) + 210);
        sat = 66;
        light = 50;

        hex1 = hslToHex(hue1, sat, light);
        hex2 = hslToHex(hue2, sat, light);
    }

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
                            <span className="col-6 text-secondary p-0 px-1 temp">Temperatura 
                                <h4 
                                    className="ps-2"
                                    style={{color: hex1}}>
                                    {Math.round(main.temp)}&#8451;</h4></span>
                            <span className="col-6 text-secondary p-0 px-1 temp">Sensación térmica 
                                <h4 className="ps-2"
                                    style={{color: hex2}}>
                                    {parseInt(main.feels_like)}&#8451;</h4></span>
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