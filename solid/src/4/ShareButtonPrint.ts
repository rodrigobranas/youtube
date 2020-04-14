import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {
	constructor(clazz: string) {
		super(clazz);
	}

	createAction(): any {
		return () => window.print();
	}
}
