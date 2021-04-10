export default class ParkingLot {
	code: string;
	capacity: number;
	openHour: number;
	closeHour: number;
	occupiedSpaces: number;

	constructor (code, capacity, openHour, closeHour, occupiedSpaces) {
		this.code = code;
		this.capacity = capacity;
		this.openHour = openHour;
		this.closeHour = closeHour;
		this.occupiedSpaces = occupiedSpaces;
	}

	isOpen (date: Date) {
		const hour = date.getHours();
		return (hour >= this.openHour && hour <= this.closeHour);
	}

	isFull () {
		return this.capacity === this.occupiedSpaces;
	}
}
