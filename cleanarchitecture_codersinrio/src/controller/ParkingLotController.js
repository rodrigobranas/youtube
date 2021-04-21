import GetParkingLot from '../core/usecase/GetParkingLot.js';
import ParkingLotRepositoryDatabase from '../infra/repository/ParkingLotRepositoryDatabase.js';

export default class ParkingLotController {
	async getParkingLot(params) {
		const repositoryDatabase = new ParkingLotRepositoryDatabase();
		const getParkingLot = new GetParkingLot(repositoryDatabase);
		const parkingLot = await getParkingLot.execute(params.code);
		return parkingLot;
	}
}
