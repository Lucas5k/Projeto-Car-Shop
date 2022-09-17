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

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar | null> {
    const idInvalid = await this._car.readOne(_id);
    if (!idInvalid) throw new Error(ErrorType.idIsInvalid);
    return this._car.readOne(_id);
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    const idInvalid = await this._car.readOne(_id);
    if (!idInvalid) throw new Error(ErrorType.idIsInvalid);

    return this._car.update(_id, { ...obj });
  }

  public async delete(_id: string): Promise<ICar | null> {
    const idInvalid = await this._car.readOne(_id);
    if (!idInvalid) throw new Error(ErrorType.idIsInvalid);
    return this._car.delete(_id);
  }
}

export default Car;
