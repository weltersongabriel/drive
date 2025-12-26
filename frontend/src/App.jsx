import { useEffect, useState } from 'react';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🚗 Aluguel de Carros</h1>

      {cars.map(car => (
        <div key={car.id} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          <h3>{car.brand} - {car.model}</h3>
          <p>Status: {car.available ? 'Disponível' : 'Indisponível'}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
