import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import ModelCar from '../../../models/modelCar';
import ServiceCar from '../../../services/serviceCar';
import { CarMock, CarMockArray, CarMockWithId } from '../../mock/CarMock';
import { ICar } from '../../../interfaces/ICar';
import { ErrorType } from '../../../errors/catalog';

describe('#CarService', () => {
  const modelCar = new ModelCar();
  const serviceCar = new ServiceCar(modelCar);

  beforeEach(async () => {
    sinon.restore();
    sinon.stub(modelCar, 'create').resolves(CarMockWithId);
    sinon.stub(modelCar, 'read').resolves(CarMockArray);
    sinon.stub(modelCar, 'readOne').resolves(CarMockWithId);
    sinon.stub(modelCar, 'update').resolves(CarMockWithId);
    sinon.stub(modelCar, 'delete').resolves(true as unknown as ICar);
  });

  afterEach(()=>{
    sinon.restore();
  });

  describe('#Read', () => {
    sinon.restore();
    it('Car read sucess', async () => {
      const result = await serviceCar.read();

      expect(result).to.be.deep.eq(CarMockArray);
    });
  });

  describe('#ReadOne', () => {
    it('Car readOne sucess', async () => {
      const result = await serviceCar.readOne(CarMockWithId._id);

      expect(result).to.be.deep.eq(CarMockWithId);
    });

    it('Car readOne id invalid', async () => {
      sinon.restore();
      sinon.stub(modelCar, 'readOne').rejects({ message: ErrorType.idIsInvalid });
 
      try {
        await serviceCar.readOne("123456789Errado");
      } catch (error: any) {
      expect(error.message).to.be.deep.equal(ErrorType.idIsInvalid);
      }
    });

    it('Car readOne length invalid', async () => {
      sinon.restore();
      sinon.stub(modelCar, 'readOne').rejects({ message: ErrorType.idIsSmaller });
      try {
        await serviceCar.readOne('1');
      } catch (error: any) {
        expect(error.message).to.be.deep.eq(ErrorType.idIsSmaller);
      }
    });
  });


  describe('#create', () => {
    it('Car create sucess', async () => {
      const result = await serviceCar.create(CarMock);

      expect(result).to.be.deep.equal(CarMockWithId);
    });

    it('Car create failed', async () => {
      sinon.restore();
      sinon.stub(modelCar, 'create').rejects({ message: ErrorType.emptyObject });

      try {
        await serviceCar.create({} as unknown as ICar);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorType.emptyObject);
      }
    });
  });

  describe('#update', () => {
    it('Car update sucess', async () => {
      const id = '4edd40c86762e0fb1200000';
      const result = await serviceCar.update(id, CarMock);

      expect(result).to.be.deep.eq(CarMockWithId);
    });

    it('Car update failed', async () => {
      sinon.restore();
      sinon.stub(modelCar, 'readOne').rejects({ message: ErrorType.idIsInvalid });
      try {
        await serviceCar.readOne('1233Errado');
      } catch (error: any) {
        expect(error.message).to.be.deep.eq(ErrorType.idIsInvalid);
      }
    });
  });

  describe('#delete', () => {
    it('Car delete sucess', async () => {
      const id = '4edd40c86762e0fb1200000';
      const result = await serviceCar.delete(id);
      
      expect(result).to.be.true;
    });

    it('Car delete failed', async () => {
      sinon.restore();
      sinon.stub(modelCar, 'readOne').rejects({ message: ErrorType.idIsInvalid });
      try {
        await serviceCar.readOne('12345Errado');
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorType.idIsInvalid);
      }
    });
  });
});