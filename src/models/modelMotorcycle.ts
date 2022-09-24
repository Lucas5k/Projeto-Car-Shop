import { model as mongooseCreateModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './mongoModel';
import IMotorcycleInterface from '../interfaces/IMotorcycleInterface';

class Motorcycle extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycle', IMotorcycleInterface)) {
    super(model);
  }
}

export default Motorcycle;
