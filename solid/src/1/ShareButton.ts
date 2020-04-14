import EventHandler from "./EventHandler";

export default class ShareButton {
	url: string

	constructor(url: string) {
		this.url = url;
	}
	
	bind(clazz: string, socialNetwork: string): void {
		let link: string;
		if (socialNetwork === "twitter") {
			link = `https://twitter.com/share?url=${this.url}`;
		}
		if (socialNetwork === "facebook") {
			link = `http://www.facebook.com/sharer.php?u=${this.url}`;
		}
		if (socialNetwork === "linkedin") {
			link = `http://www.linkedin.com/shareArticle?url=${this.url}`;
		}
		EventHandler.addEventListenerToClass("click", clazz, () => window.open(link));
	}
}
