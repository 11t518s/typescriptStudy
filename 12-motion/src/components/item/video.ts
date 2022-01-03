import { BaseComponent } from "../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
                        <div class="video__player">
                            <iframe class="video__iframe"></iframe>
                            <h3 class="video__title"></h3>
                        </div>
                     </section>`);
    const videoElement = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    videoElement.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const videoId = url.split("=");
    return `https://www.youtube.com/embed/${videoId[1]}`;
  }
}
