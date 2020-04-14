import AbstractEventHandler from "./AbstractEventHandler";
import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {
	constructor(eventHandler: AbstractEventHandler, clazz: string) {
		super(eventHandler, clazz);
	}

	createAction(): any {
		return () => window.print();
	}
}
