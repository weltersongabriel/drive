const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const cars = [
  { id: 1, brand: 'Volkswagen', model: 'Gol', available: true },
  { id: 2, brand: 'Chevrolet', model: 'Onix', available: true },
  { id: 3, brand: 'Hyundai', model: 'HB20', available: false }
];

app.get('/cars', (req, res) => {
  res.json(cars);
});

app.post('/rent', (req, res) => {
  const { carId } = req.body;
  const car = cars.find(c => c.id === carId);

  if (!car || !car.available) {
    return res.status(400).json({ message: 'Carro indisponível' });
  }

  car.available = false;
  res.json({ message: 'Carro alugado com sucesso!' });
});

app.listen(3000, () => {
  console.log('✅ Backend rodando em http://localhost:3000');
});
