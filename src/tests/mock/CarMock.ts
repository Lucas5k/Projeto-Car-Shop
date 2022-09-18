import { ICar } from '../../interfaces/ICar';

export const CarMock: ICar = {
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}

export const CarMockWithId: ICar & { _id: string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}

export const CarMockArray = [
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  },
  {
    _id: "4edd40c86762e0fb13000000",
    model: "Camaro",
    year: 2022,
    color: "black",
    buyValue: 1000000000000000,
    seatsQty: 2,
    doorsQty: 2
  }
]