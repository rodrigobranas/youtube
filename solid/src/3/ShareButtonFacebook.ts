import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonFacebook extends AbstractShareButton {
	constructor(clazz: string, url: string) {
		super(clazz, url);
	}

	createLink(): string {
		return `http://www.facebook.com/sharer.php?u=${this.url}`;
	}
}
