import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';
import ValidatedService from '../services/validatedService';

class Motorcycle {
  constructor(private _Service: IService<IMotorcycle>) { }

  public async create(req: Request, res: Response<IMotorcycle>): Promise<void> {
    const result = await this._Service.create(req.body);

    ValidatedService.validatedVehicle(req.body);
    ValidatedService.validatedMotorcycle(req.body);
    ValidatedService.validatedStreet(req.body);

    res.status(201).json(result);
  }

  public async read(_req: Request, res: Response<IMotorcycle>): Promise<void> {
    const result = await this._Service.read();

    res.status(200).json(result as unknown as IMotorcycle);
  }
}

export default Motorcycle;