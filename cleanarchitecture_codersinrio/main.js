import EnterParkingLot from './src/core/usecase/EnterParkingLot.js';
import GetParkingLot from './src/core/usecase/GetParkingLot.js';

import ParkingLotRepositoryMemory from './src/infra/repository/ParkingLotRepositoryMemory.js';
const repositoryMemory = new ParkingLotRepositoryMemory();

import ParkingLotRepositoryDatabase from './src/infra/repository/ParkingLotRepositoryDatabase.js';
const repositoryDatabase = new ParkingLotRepositoryDatabase();

const getParkingLot = new GetParkingLot(repositoryDatabase);
const parkingLotBeforeEnter = await getParkingLot.execute('shopping');
console.log(parkingLotBeforeEnter);

const enterParkingLot = new EnterParkingLot(repositoryDatabase);
await enterParkingLot.execute('shopping', Math.floor(Math.random() * 1000), new Date('2021-04-20T10:00:00'));

const parkingLotAfterEnter = await getParkingLot.execute('shopping');
console.log(parkingLotAfterEnter);
