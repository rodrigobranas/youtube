import AbstractEventHandler from "./AbstractEventHandler";
import AbstractShareButton from "./AbstractShareButton";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
	url: string

	constructor(eventHandler: AbstractEventHandler, clazz: string, url: string) {
		super(eventHandler, clazz);
		this.url = url;
	}
	
	abstract createLink(): string;

	createAction(): any {
		const link = this.createLink();
		return () => window.open(encodeURI(link));
	}
}
