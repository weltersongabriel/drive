function RentModal({ car, onClose }) {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        background: "#213547",
        padding: 20,
        maxWidth: 400,
        margin: "100px auto"
      }}>
        <h2>Alugar {car.title}</h2>

        <label>
          Data inicial
          <input type="date" />
        </label>

        <br /><br />

        <label>
          Data final
          <input type="date" />
        </label>

        <br /><br />

        <button>Confirmar aluguel</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}

export default RentModal;
