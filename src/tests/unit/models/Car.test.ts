import ModelCar from '../../../models/modelCar';
import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { CarMock, CarMockArray, CarMockWithId } from '../../mock/CarMock';
const { expect } = chai;

describe('#CarModel', () => {
  const modelCar = new ModelCar();
  before(async () => {
    sinon.stub(Model, 'create').resolves(CarMockWithId);
    sinon.stub(Model, 'find').resolves(CarMockArray);
    sinon.stub(Model, 'findOne').resolves(CarMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(CarMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves('No Content');
  });

  after(()=>{
    sinon.restore();
  })

  describe('#create', () => {
    it('Car create sucess', async () => {
      const result = await modelCar.create(CarMock);
      expect(result).to.be.deep.equal(CarMockWithId);
    });
  });

  describe('#find', () => {
    it('Car read sucess', async () => {
      const result = await modelCar.read();
      expect(result).to.be.deep.equal(CarMockArray);
    });
  });

  describe('#findOne', () => {
    it('Car readOne sucess', async () => {
      const result = await modelCar.readOne('4edd40c86762e0fb12000003');

      expect(result).to.be.deep.equal(CarMockWithId);
    });

    it('Car readOne failed', async () => {
      try {
        await modelCar.readOne('12345Errado');
      } catch (error: any) {
        expect(error.message).to.be.eq('Error');
      }
    });
  });

  describe('#update', () => {
    it('Car update sucess', async () => {
      const id = '4edd40c86762e0fb12000003';
      await modelCar.update(id, CarMock);
      const result = await modelCar.readOne(id);

      expect(result).to.be.deep.equal(CarMockWithId);
    });

    it('Car update failed', async () => {
      try {
        await modelCar.update('12345Errado', CarMock);
      } catch (error: any) {
        expect(error.message).to.be.eq('Error');
      }
    });
  });

  describe('#delete', () => {
    it('Car delete sucess', async () => {
      const id = '4edd40c86762e0fb12000003';
      const result = await modelCar.delete(id);
      expect(result).to.be.equal('No Content');
    });

    it('Car delete failed', async () => {
      try {
        await modelCar.delete('12345Errado');
      } catch (error: any) {
        expect(error.message).to.be.eq('id invalid');
      }
    });
  });
});