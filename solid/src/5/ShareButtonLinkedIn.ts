import AbstractEventHandler from "./AbstractEventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
	constructor(eventHandler: AbstractEventHandler, clazz: string, url: string) {
		super(eventHandler, clazz, url);
	}

	createLink(): string {
		return `http://www.linkedin.com/shareArticle?mini=true&url=${this.url}`;
	}
}
