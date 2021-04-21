export default class HapiAdapter {
	static create (fn) {
		return async function (request) {
			const obj = await fn(request.params);
			return obj;
		}
	}
}
