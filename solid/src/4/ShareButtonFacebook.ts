import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
	constructor(clazz: string, url: string) {
		super(clazz, url);
	}

	createLink(): string {
		return `http://www.facebook.com/sharer.php?u=${this.url}`;
	}
}
