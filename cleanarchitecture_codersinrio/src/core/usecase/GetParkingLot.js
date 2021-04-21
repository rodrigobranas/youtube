export default class GetParkingLot {
	constructor (repository) {
		this.repository = repository;
	}

	async execute (code) {
		const parkingLot = await this.repository.getParkingLot(code);
		return parkingLot;
	}
}
