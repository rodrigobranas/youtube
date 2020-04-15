// import ShareButton from "./0/ShareButton";

// const shareButton = new ShareButton("http://www.youtube.com/rodrigobranas");
// shareButton.bind(".btn-twitter", "twitter");
// shareButton.bind(".btn-facebook", "facebook");
// shareButton.bind(".btn-linkedin", "linkedin");

// import ShareButton from "./1/ShareButton";

// const shareButton = new ShareButton("http://www.youtube.com/rodrigobranas");
// shareButton.bind(".btn-twitter", "twitter");
// shareButton.bind(".btn-facebook", "facebook");
// shareButton.bind(".btn-linkedin", "linkedin");

// import ShareButtonTwitter from "./2/ShareButtonTwitter";
// import ShareButtonFacebook from "./2/ShareButtonFacebook";
// import ShareButtonLinkedIn from "./2/ShareButtonLinkedIn";

// const shareButtonTwitter = new ShareButtonTwitter(".btn-twitter", "https://www.youtube.com/rodrigobranas");
// shareButtonTwitter.bind();
// const shareButtonFacebook = new ShareButtonFacebook(".btn-facebook", "https://www.youtube.com/rodrigobranas");
// shareButtonFacebook.bind();
// const shareButtonLinkedIn = new ShareButtonLinkedIn(".btn-linkedin", "https://www.youtube.com/rodrigobranas");
// shareButtonLinkedIn.bind();

// import ShareButtonTwitter from "./3/ShareButtonTwitter";
// import ShareButtonFacebook from "./3/ShareButtonFacebook";
// import ShareButtonLinkedIn from "./3/ShareButtonLinkedIn";
// import ShareButtonPrint from "./3/ShareButtonPrint";

// const shareButtonTwitter = new ShareButtonTwitter(".btn-twitter", "https://www.youtube.com/rodrigobranas");
// shareButtonTwitter.bind();
// const shareButtonFacebook = new ShareButtonFacebook(".btn-facebook", "https://www.youtube.com/rodrigobranas");
// shareButtonFacebook.bind();
// const shareButtonLinkedIn = new ShareButtonLinkedIn(".btn-linkedin", "https://www.youtube.com/rodrigobranas");
// shareButtonLinkedIn.bind();
// const shareButtonPrint = new ShareButtonPrint(".btn-print", "https://www.youtube.com/rodrigobranas");
// shareButtonPrint.bind();

// import ShareButtonTwitter from "./4/ShareButtonTwitter";
// import ShareButtonFacebook from "./4/ShareButtonFacebook";
// import ShareButtonLinkedIn from "./4/ShareButtonLinkedIn";
// import ShareButtonPrint from "./4/ShareButtonPrint";

// const shareButtonTwitter = new ShareButtonTwitter(".btn-twitter", "https://www.youtube.com/rodrigobranas");
// shareButtonTwitter.bind();
// const shareButtonFacebook = new ShareButtonFacebook(".btn-facebook", "https://www.youtube.com/rodrigobranas");
// shareButtonFacebook.bind();
// const shareButtonLinkedIn = new ShareButtonLinkedIn(".btn-linkedin", "https://www.youtube.com/rodrigobranas");
// shareButtonLinkedIn.bind();
// const shareButtonPrint = new ShareButtonPrint(".btn-print");
// shareButtonPrint.bind();

import ShareButtonTwitter from "./5/ShareButtonTwitter";
import ShareButtonFacebook from "./5/ShareButtonFacebook";
import ShareButtonLinkedIn from "./5/ShareButtonLinkedIn";
import ShareButtonPrint from "./5/ShareButtonPrint";
import DOMEventHandler from "./5/DOMEventHandler";
import MockEventHandler from "./5/MockEventHandler";

const eventHandler = new DOMEventHandler();

const shareButtonTwitter = new ShareButtonTwitter(eventHandler, ".btn-twitter", "https://www.youtube.com/rodrigobranas");
shareButtonTwitter.bind();
const shareButtonFacebook = new ShareButtonFacebook(eventHandler, ".btn-facebook", "https://www.youtube.com/rodrigobranas");
shareButtonFacebook.bind();
const shareButtonLinkedIn = new ShareButtonLinkedIn(eventHandler, ".btn-linkedin", "https://www.youtube.com/rodrigobranas");
shareButtonLinkedIn.bind();
const shareButtonPrint = new ShareButtonPrint(eventHandler, ".btn-print");
shareButtonPrint.bind();

