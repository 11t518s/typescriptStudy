import { BaseComponent } from "../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
                        <h2 class="image__holder"><img class="image__thumbnail"></h2>
                        <p class="image__title"></p>
                     </section>`);
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
