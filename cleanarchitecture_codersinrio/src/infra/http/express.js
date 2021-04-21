import Express from 'express';
const app = new Express();

import ParkingLotController from '../../controller/ParkingLotController.js';
import ExpressAdapter from '../../adapter/ExpressAdapter.js';

const parkingLotController = new ParkingLotController();

app.get('/parkingLots/:code', ExpressAdapter.create(parkingLotController.getParkingLot));

app.listen(3000);
