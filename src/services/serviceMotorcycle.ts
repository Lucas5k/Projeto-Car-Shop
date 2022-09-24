import { ErrorType } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

class Motorcycle implements IService<IMotorcycle> {
  private _motorcycle: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    if (!obj) throw new Error(ErrorType.emptyObject);

    return this._motorcycle.create(obj);
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._motorcycle.read();
  }

  public async readOne(_id: string): Promise<IMotorcycle | null> {
    const idInvalid = await this._motorcycle.readOne(_id);
    if (!idInvalid) throw new Error(ErrorType.idIsInvalid);
    return this._motorcycle.readOne(_id);
  }

  public async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    const idInvalid = await this._motorcycle.readOne(_id);
    if (!idInvalid) throw new Error(ErrorType.idIsInvalid);

    return this._motorcycle.update(_id, { ...obj });
  }

  public async delete(_id: string): Promise<IMotorcycle | null> {
    const idInvalid = await this._motorcycle.readOne(_id);
    if (!idInvalid) throw new Error(ErrorType.idIsInvalid);
    return this._motorcycle.delete(_id);
  }
}

export default Motorcycle;
