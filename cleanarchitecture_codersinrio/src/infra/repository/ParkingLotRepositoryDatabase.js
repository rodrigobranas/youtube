import ParkingLotAdapter from '../../adapter/ParkingLotAdapter.js';
import database from '../database/database.js';

export default class ParkingLotRepositoryDatabase {
	constructor () {
	}

	async getParkingLot (code) {
		const parkingLotData = await database.oneOrNone('select * from example.parking_lot where code = $1', [code]);
		const parkedCars = await database.query('select * from example.parked_car where code = $1', [code]);
		const occupiedSpaces = parkedCars.length;
		return ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, occupiedSpaces);
	}

	async saveParkedCar (code, plate, enterDate) {
		await database.none('insert into example.parked_car (code, plate, enter_date) values ($1, $2, $3)', [code, plate, enterDate]);
	}
}
