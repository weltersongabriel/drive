import { useEffect, useState } from "react";
import CarCard from "./components/CarCard";
import RentModal from "./components/RentModal";

function App() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showRentModal, setShowRentModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  function openRentModal(car) {
    setSelectedCar(car);
    setShowRentModal(true);
  }

  function closeRentModal() {
    setShowRentModal(false);
    setSelectedCar(null);
  }

  return (
    <div style={{ padding: 20 }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>🚗 Aluguel de Carros</h1>
        <button>Adicionar automóvel</button>
      </header>

      <main style={{ marginTop: 20, display: "grid", gap: 16 }}>
        {cars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            onRent={() => openRentModal(car)}
          />
        ))}
      </main>

      {showRentModal && (
        <RentModal car={selectedCar} onClose={closeRentModal} />
      )}
    </div>
  );
}

export default App;
