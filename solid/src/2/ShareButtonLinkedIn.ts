import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonLinkedin extends AbstractShareButton {
	constructor(clazz: string, url: string) {
		super(clazz, url);
	}

	createLink(): string {
		return `http://www.linkedin.com/shareArticle?mini=true&url=${this.url}`;
	}
}
