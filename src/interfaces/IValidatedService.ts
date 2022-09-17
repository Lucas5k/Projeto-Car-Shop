export interface IValidatedService<T> {
  validatedCar(obj: T): void
  validatedVehicle(obj: T): void
  validatedCarId(_id: T): void
}