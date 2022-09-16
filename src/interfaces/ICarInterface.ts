import { Schema } from 'mongoose';
import { ICar } from './ICar';

const carInterface = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default carInterface;
