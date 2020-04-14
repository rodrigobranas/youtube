import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonTwitter extends AbstractShareButton {
	constructor(clazz: string, url: string) {
		super(clazz, url);
	}

	createLink(): string {
		return `https://twitter.com/share?url=${this.url}`;
	}
}
