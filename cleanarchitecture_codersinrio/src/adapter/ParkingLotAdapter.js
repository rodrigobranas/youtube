import ParkingLot from '../core/entity/ParkingLot.js';

export default class ParkingLotAdapter {
	static create (code, capacity, openHour, closeHour, occupiedSpaces) {
		return new ParkingLot(code, capacity, openHour, closeHour, occupiedSpaces);
	}
}
