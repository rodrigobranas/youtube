export default interface EventHandler {
	addEventListenerToClass(clazz: string, event: string, fn: any);
}