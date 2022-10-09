import { isValidObjectId, Model } from 'mongoose';
// import { ErrorType } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  // atributos...
  protected _model:Model<T>;
  // métodos...
  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this._model.find({});
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('Error');

    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('Error');
    await this._model.findByIdAndUpdate(_id, { ...obj }, { new: true });
    const ts = await this._model.findOne({ _id });
    
    return ts;
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('id invalid');

    return this._model.findByIdAndDelete({ _id });
  }
}

export default MongoModel;