export interface IService<T> {
  create(obj: T): Promise<T>
  read(): Promise<T[]>
  update(_id: string, obj: T): Promise<T | null>
}