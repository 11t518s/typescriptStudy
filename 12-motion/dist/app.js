import { PageComponent } from "./components/page.js";
import { ImageComponent } from "./components/item/image.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "http://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
