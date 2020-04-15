import EventHandler from "./EventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
	
	constructor(eventHandler: EventHandler, clazz: string, url: string) {
		super(eventHandler, clazz, url);
	}

	createLink(): string {
		return `http://www.facebook.com/sharer.php?u=${this.url}`;
	}
}