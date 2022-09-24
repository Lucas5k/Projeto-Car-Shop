import { ErrorType } from '../errors/catalog';
import { ICar } from '../interfaces/ICar';
import { IMotorcycle } from '../interfaces/IMotorcycle';

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

  public static validatedMotorcycle = (obj: IMotorcycle) => {
    const { category, engineCapacity } = obj;

    if (!category || !engineCapacity) {
      throw new Error(ErrorType.withoutCarProperties);
    }
  
    if (typeof category !== 'string') throw new Error(ErrorType.emptyObject);
    if (engineCapacity > 2500) throw new Error(ErrorType.emptyObject);
  };

  public static validatedStreet = (obj: IMotorcycle) => {
    const { category } = obj;
    
    if (category !== 'Street') throw new Error(ErrorType.emptyObject);
  };
}

export default ValidatedService;
