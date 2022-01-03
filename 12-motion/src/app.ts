import {PageComponent} from "./components/page.js";
import {ImageComponent} from "./components/item/image.js";
import {VideoComponent} from "./components/item/video.js";
import {TodoComponent} from "./components/item/todo.js";
import {NoteComponent} from "./components/item/note.js";

class App {
    private readonly page: PageComponent;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent(
            "Image Title",
            "http://picsum.photos/600/300"
        );
        image.attachTo(appRoot, "beforeend");

        const video = new VideoComponent(
            "video title",
            "https://www.youtube.com/watch?v=8Ar_28T4Rsc
        );
        video.attachTo(appRoot, "beforeend");

        const note = new NoteComponent("note title", "note text");
        note.attachTo(appRoot, "beforeend");

        const todo = new TodoComponent("todo Title", "todo Isdfsdfsdfsdfstem");
        todo.attachTo(appRoot, "beforeend");
    }
}

new App(document.querySelector(".document")! as HTMLElement);
