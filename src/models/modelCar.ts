import { model as mongooseCreateModel } from 'mongoose';
import carInterface from '../interfaces/ICarInterface';
import MongoModel from './mongoModel';
import { ICar } from '../interfaces/ICar';

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carInterface)) {
    super(model);
  }
}

export default Car;
