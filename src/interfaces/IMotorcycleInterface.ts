import { Schema } from 'mongoose';
import { IMotorcycle } from './IMotorcycle';

const motorcycleInterface = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
});

export default motorcycleInterface;
