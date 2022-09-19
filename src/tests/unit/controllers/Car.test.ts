import Sinon, * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Request, Response } from 'express';
import ModelCar from '../../../models/modelCar';
import ServiceCar from '../../../services/serviceCar';
import ControllerCar from '../../../controllers/controllerCar';
import { CarMock, CarMockArray, CarMockWithId } from '../../mock/CarMock';
import { ErrorType } from '../../../errors/catalog';
import { ICar } from '../../../interfaces/ICar';

describe('#CarController', () => {
  const modelCar = new ModelCar();
  const serviceCar = new ServiceCar(modelCar);
  const controllerCar = new ControllerCar(serviceCar);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(async () => {
    sinon.restore();
    sinon.stub(serviceCar, 'create').resolves(CarMockWithId);
    sinon.stub(serviceCar, 'read').resolves(CarMockArray);
    sinon.stub(serviceCar, 'readOne').resolves(CarMockWithId);
    sinon.stub(serviceCar, 'update').resolves(CarMockWithId);
    sinon.stub(serviceCar, 'delete').resolves('No Content' as unknown as ICar);

    res.status = sinon.stub().returns(res);
    res.sendStatus = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(()=>{
    sinon.restore();
  })

  describe('#create', () => {
    it('Car create sucess', async () => {
      req.body = CarMock;
      await controllerCar.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(CarMockWithId)).to.be.true;
    });

    describe('#read', () => {
      it('Car read sucess', async () => {
        req.body = {};
        await controllerCar.read(req, res);

        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
        expect((res.json as sinon.SinonStub).calledWith(CarMockArray)).to.be.true;
      });
    });
  });

  describe('#readOne', () => {
    it('Car readOne sucess', async () => {
      req.params = { id: CarMockWithId._id };
      await controllerCar.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(CarMockWithId)).to.be.true;
    });
  });

  describe('#update', () => {
    it('Car update sucess', async () => {
      req.params = { id: CarMockWithId._id };
      req.body = CarMock;
      await controllerCar.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(CarMockWithId)).to.be.true;
    });
  });

  describe('#delete', () => {
    it('Car delete sucess', async () => {
      req.params = { id: CarMockWithId._id };
      await controllerCar.delete(req, res);

      expect((res.sendStatus as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  });
});