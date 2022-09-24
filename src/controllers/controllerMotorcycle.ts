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
}

export default Motorcycle;