import { ErrorType } from '../errors/catalog';
import { ICar } from '../interfaces/ICar';
// import ModelCar from '../models/modelCar';
// import ServiceCar from './serviceCar';

class ValidatedService {
  public static validatedVehicle = (obj: ICar) => {
    const { model, year, color, buyValue } = obj;
    if (!model || !year || !color || !buyValue) {
      throw new Error(ErrorType.withoutCarProperties);
    }
  };

  public static validatedCar = (obj: ICar) => {
    const { doorsQty, seatsQty } = obj;
    if (seatsQty < 2) throw new Error(ErrorType.minSeatsQuantityError);
    if (doorsQty < 2) throw new Error(ErrorType.minDoorQuantityError);
    if (!doorsQty || !seatsQty) throw new Error(ErrorType.withoutCarProperties);
  };

  public static validatedCarId = (_id: string) => {
    if (_id.length < 24) throw new Error(ErrorType.idIsSmaller);
  };
}

export default ValidatedService;
