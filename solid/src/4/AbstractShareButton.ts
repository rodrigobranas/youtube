import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
	clazz: string;

	constructor(clazz: string) {
		this.clazz = clazz;
	}
	
	abstract createAction(): any;

	bind(): void {
		const action = this.createAction();
		EventHandler.addEventListenerToClass("click", this.clazz, action);
	}
}
