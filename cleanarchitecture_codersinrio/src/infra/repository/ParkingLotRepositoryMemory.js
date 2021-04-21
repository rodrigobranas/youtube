import ParkingLotAdapter from '../../adapter/ParkingLotAdapter.js';

export default class ParkingLotRepositoryMemory {
	constructor () {
		this.parkingLots = [
			{
				code: 'shopping',
				capacity: 100,
				open_hour: 8,
				close_hour: 22
			}
		];
		this.parkedCars = [

		];
	}

	async getParkingLot (code) {
		const parkingLotData = this.parkingLots.find((parkingLot) => parkingLot.code === code);
		const occupiedSpaces = (this.parkedCars.filter((parkedCar) => parkedCar.code === code)).length;
		return ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, occupiedSpaces);
	}

	async saveParkedCar (code, plate, enterDate) {
		this.parkedCars.push({ code, plate, enter_date: enterDate });
	}
}
