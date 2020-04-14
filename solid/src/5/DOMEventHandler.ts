import AbstractEventHandler from "./AbstractEventHandler";

export default class DOMEventHandler implements AbstractEventHandler {
	addEventListenerToClass(event: string, clazz: string, fn: any): void {
		const elements: any = document.querySelectorAll(clazz);
		for (const element of elements) {
			element.addEventListener(event, fn);
		}
	}
}