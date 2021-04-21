export default class ParkingLot {
	constructor (code, capacity, openHour, closeHour, occupiedSpaces) {
		this.code = code;
		this.capacity = capacity;
		this.openHour = openHour;
		this.closeHour = closeHour;
		this.occupiedSpaces = occupiedSpaces;
	}

	isFull () {
		return this.capacity === this.occupiedSpaces;
	}
}
