import AbstractEventHandler from "./AbstractEventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonTwitter extends AbstractLinkShareButton {
	constructor(eventHandler: AbstractEventHandler, clazz: string, url: string) {
		super(eventHandler, clazz, url);
	}

	createLink(): string {
		return `https://twitter.com/share?url=${this.url}`;
	}
}
