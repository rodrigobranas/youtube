import AbstractEventHandler from "./AbstractEventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
	constructor(eventHandler: AbstractEventHandler, clazz: string, url: string) {
		super(eventHandler, clazz, url);
	}

	createLink(): string {
		return `http://www.facebook.com/sharer.php?u=${this.url}`;
	}
}
