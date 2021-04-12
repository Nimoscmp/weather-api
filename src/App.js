import { useEffect, useState } from 'react';
import Header from './components/Header';
import SetPlace from './components/SetPlace';
import ShowData from './components/ShowData';

function App() {

  //Usestate for searching, submit and result
  const [explore, saveExplore] = useState({
    city: '',
    country: ''
  });

  const [submitting, setSubmit] = useState(false);

  const [answer, setAnswer] = useState({});

  const [waiting, setWaiting] = useState(true);

  //Destructuring object
  const {city, country} = explore;

  useEffect(() => {

    const searchAPI = async() => {
      const base_url = 'http://api.openweathermap.org/data/2.5/weather?q=';
      const api_key = '0b79dea464b8f769b18696de8de31770';

      const url = `${base_url}${city},${country}&appid=${api_key}&units=metric`;

      const response = await fetch(url);
      const result = await response.json();

      setWaiting(false);
      setAnswer(result);

      setSubmit(false);
    }

    if(submitting){
      setWaiting(true);
      searchAPI();
      
    }

  }, [submitting])

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
        <ShowData
          answer={answer}
        />
      </main>      
    </>
  );
}

export default App;
