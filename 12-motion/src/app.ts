import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page.js";
import { ImageComponent } from "./components/item/image.js";
import { VideoComponent } from "./components/item/video.js";
import { TodoComponent } from "./components/item/todo.js";
import { NoteComponent } from "./components/item/note.js";
import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "http://picsum.photos/600/300"
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      "video title",
      "https://www.youtube.com/watch?v=6s9pKLqvjlw"
    );
    this.page.addChild(video);

    const note = new NoteComponent("note title", "note text");
    this.page.addChild(note);

    const todo = new TodoComponent("todo Title", "todo");
    this.page.addChild(todo);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.
        dialog.removeFrom(document.body);
      });
      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement);
