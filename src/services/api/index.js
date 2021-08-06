export const regularSearchApi = async(city, country) => {
    const base_url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const api_key = '0b79dea464b8f769b18696de8de31770';

    const url = `${ base_url }${ city },${ country }&appid=${ api_key }&units=metric`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export const oneCallApi = async(lat, lon) => {
    const base_url = 'https://api.openweathermap.org/data/2.5/onecall?';
    const api_key = '0b79dea464b8f769b18696de8de31770';

    const url = `${ base_url }lat=${ lat }&lon=${ lon }&appid=${ api_key }&units=metric`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
}