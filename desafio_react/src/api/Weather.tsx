import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = () => {
  const [state, setState] = useState({ city_name: '', date: '', description: '' });

  useEffect(() => {
    axios.get('https://aps-weather-app.herokuapp.com/weather?cityName=Belo Horizonte')
    .then((res) => {
      const { city_name, date, description } = res.data;
      setState({
        city_name,
        date,
        description,
      });
    })
    .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <p>Cidade: <span>{state.city_name}</span></p>
      <p>Data: <span>{state.date}</span></p>
      <p>Descrição: <span>{state.description}</span></p>
    </div>
  );
};

export default Weather;
