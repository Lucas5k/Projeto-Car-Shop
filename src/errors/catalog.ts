export enum ErrorType {
  emptyObject = 'emptyObject',
  minSeatsQuantityError = 'minSeatsQuantityError',
  minDoorQuantityError = 'minDoorQuantityError',
  withoutVehicleProperties = 'withoutVehicleProperties',
  withoutCarProperties = 'withoutCarProperties',
  idIsSmaller = 'idIsSmaller',
  idIsInvalid = 'idIsInvalid',
}

type ErrorResponseObject = {
  message?: string,
  httpStatus: number,
  error?: string
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
  idIsSmaller: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
  idIsInvalid: {
    error: 'Object not found',
    httpStatus: 404,
  },
};

export default errorCatalog;