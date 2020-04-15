import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler {
	addEventListenerToClass(clazz: string, event: string, fn: any) {
		const elements: any = document.querySelectorAll(clazz);
		for (const element of elements) {
			element.addEventListener(event, fn);
		}
	}
}