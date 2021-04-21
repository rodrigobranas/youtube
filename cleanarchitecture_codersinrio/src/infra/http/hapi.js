import Hapi from '@hapi/hapi';

import ParkingLotController from '../../controller/ParkingLotController.js';
import HapiAdapter from '../../adapter/HapiAdapter.js';

const parkingLotController = new ParkingLotController();

const server = Hapi.server({
	port: 3000,
	host: 'localhost'
});

server.route({
	method: 'GET',
	path: '/parkingLots/{code}',
	handler: HapiAdapter.create(parkingLotController.getParkingLot)
});

server.start();
