import { useEffect, useState } from 'react';
import Error from './components/Error';
import Header from './components/Header';
import SetPlace from './components/SetPlace';
import ShowData from './components/ShowData';

function App() {

  //Usestate for searching, submit and result
  const [explore, saveExplore] = useState({
    city: '',
    country: ''
  });

  const [answer, setAnswer] = useState({});
  const [submitting, setSubmit] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [error, setError] = useState(false);

  //Destructuring object
  const {city, country} = explore;

  useEffect(() => {

    const checkError = () => {
      if(answer.cod === "404"){
        setError(true);
      } else {
        setError(false);
      }
    }

    const searchAPI = async() => {
      const base_url = 'http://api.openweathermap.org/data/2.5/weather?q=';
      const api_key = '0b79dea464b8f769b18696de8de31770';

      const url = `${base_url}${city},${country}&appid=${api_key}&units=metric`;

      const response = await fetch(url);
      const result = await response.json();

      setWaiting(false);
      setAnswer(result, checkError());

      setSubmit(false);
      checkError();
    }

    if(submitting){
      setWaiting(true);
      searchAPI();

    }

  }, [submitting, city, country, answer.cod])

  let component;

  

  if(error){
    component = <Error/>
  } else {
    component = <ShowData answer={answer}/>
  }

  return (
    <>
      <Header
        title="El clima"
      />

      <main className="row py-2 px-0 m-0 d-flex justify-content-evenly">
        <SetPlace 
          explore={explore}
          saveExplore={saveExplore}
          setSubmit={setSubmit}
          submitting={submitting}
          waiting={waiting}
        />
        {component}
      </main>      
    </>
  );
}

export default App;
