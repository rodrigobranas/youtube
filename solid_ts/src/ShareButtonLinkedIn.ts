import EventHandler from "./EventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
	
	constructor(eventHandler: EventHandler, clazz: string, url: string) {
		super(eventHandler, clazz, url);
	}

	createLink(): string {
		return `http://www.linkedin.com/shareArticle?url=${this.url}`;
	}
}