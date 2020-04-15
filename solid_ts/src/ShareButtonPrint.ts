import EventHandler from "./EventHandler";
import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {
	
	constructor(eventHandler: EventHandler, clazz: string) {
		super(eventHandler, clazz);
	}

	createAction() {
		return () => window.print();
	}
}