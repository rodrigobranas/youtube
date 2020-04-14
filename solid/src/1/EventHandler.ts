export default class EventHandler {
	static addEventListenerToClass(event: string, clazz: string, fn: any): void {
		const elements: any = document.querySelectorAll(clazz);
		for (const element of elements) {
			element.addEventListener(event, fn);
		}
	}
}