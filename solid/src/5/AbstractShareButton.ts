import AbstractEventHandler from "./AbstractEventHandler";

export default abstract class AbstractShareButton {
	eventHandler: AbstractEventHandler;
	clazz: string;

	constructor(eventHandler: AbstractEventHandler, clazz: string) {
		this.eventHandler = eventHandler;
		this.clazz = clazz;
	}
	
	abstract createAction(): any;

	bind(): void {
		const action = this.createAction();
		this.eventHandler.addEventListenerToClass("click", this.clazz, action);
	}
}
