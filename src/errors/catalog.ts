export enum ErrorType {
  emptyObject = 'emptyObject',
  minSeatsQuantityError = 'minSeatsQuantityError',
  minDoorQuantityError = 'minDoorQuantityError',
  withoutVehicleProperties = 'withoutVehicleProperties',
  withoutCarProperties = 'withoutCarProperties',
}

type ErrorResponseObject = {
  message: string,
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorType]: ErrorResponseObject
};

const errorCatalog: ErrorCatalog = {
  emptyObject: {
    message: 'the object must not be empty',
    httpStatus: 400,
  },
  minSeatsQuantityError: {
    message: 'the number of seats must not be less than 2',
    httpStatus: 400,
  },
  minDoorQuantityError: {
    message: 'the number of ports must not be less than 2',
    httpStatus: 400,
  },
  withoutVehicleProperties: {
    message: 'you tried to create with some property missing',
    httpStatus: 400,
  },
  withoutCarProperties: {
    message: 'you tried to create with some property missing',
    httpStatus: 400,
  },
};

export default errorCatalog;