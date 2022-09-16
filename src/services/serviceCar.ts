import { ErrorType } from '../errors/catalog';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class Car implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    if (!obj) throw new Error(ErrorType.emptyObject);

    return this._car.create(obj);
  }
}

export default Car;
