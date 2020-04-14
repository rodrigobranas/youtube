export default interface AbstractEventHandler {
	addEventListenerToClass(event: string, clazz: string, action: any): void;
}