import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
	clazz: string;
	url: string

	constructor(clazz: string, url: string) {
		this.clazz = clazz;
		this.url = url;
	}
	
	abstract createLink(): string;

	bind(): void {
		const link = this.createLink();
		EventHandler.addEventListenerToClass("click", this.clazz, () => window.open(link));
	}
}
