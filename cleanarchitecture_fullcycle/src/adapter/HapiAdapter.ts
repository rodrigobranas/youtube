export default class HapiAdapter {
	static create (fn) {
		return async function (req) {
			const obj = await fn(req.params, req.payload);
			return obj;
		}
	}
}
