import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';
import ValidatedService from '../services/validatedService';

class Car {
  constructor(private _Service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>): Promise<void> {
    const { doorsQty, seatsQty, model, year, color, status, buyValue } = req.body;
    const CAR = { doorsQty, seatsQty, model, year, color, status, buyValue };
    const result = await this._Service.create(CAR);

    ValidatedService.validatedCar(CAR);
    ValidatedService.validatedVehicle(CAR);

    res.status(201).json(result);
  }
}

export default Car;