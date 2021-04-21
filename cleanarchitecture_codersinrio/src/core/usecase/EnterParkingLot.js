export default class EnterParkingLot {
	constructor (repository) {
		this.repository = repository;
	}

	async execute (code, plate, enterDate) {
		const parkingLot = await this.repository.getParkingLot(code);
		if (parkingLot.isFull()) throw new Error('Parking lot full');
		await this.repository.saveParkedCar(code, plate, enterDate);
	}
}
