function CarCard({ car, onRent }) {
  return (
    <div style={{ border: "1px solid #213547", padding: 16 }}>
      <img
        src="https://via.placeholder.com/300x150"
        alt={car.title}
        style={{ width: "100%" }}
      />

      <h2>{car.title}</h2>
      <p>{car.description}</p>

      <button
        onClick={onRent}
        disabled={!car.available}
      >
        {car.available ? "Alugar" : "Indisponível"}
      </button>
    </div>
  );
}

export default CarCard;
