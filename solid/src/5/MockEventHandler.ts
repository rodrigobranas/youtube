import AbstractEventHandler from "./AbstractEventHandler";

export default class MockEventHandler implements AbstractEventHandler {
	addEventListenerToClass(event: string, clazz: string, fn: any): void {
		console.log(event, clazz, fn);
	}
}