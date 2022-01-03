import { BaseComponent } from "../component.js";

export class VideoComponent extends BaseComponent {
  constructor(title, url) {
    super(`<section class="video">
                        <div class="video__player">
                            <iframe class="video__iframe"></iframe>
                            <h3 class="video__title"></h3>
                        </div>
                     </section>`);
    const videoElement = this.element.querySelector(".video__iframe");
    videoElement.src = this.convertToEmbeddedURL(url);
    const titleElement = this.element.querySelector(".video__title");
    titleElement.textContent = title;
  }

  convertToEmbeddedURL(url) {
    const videoId = url.split("=");
    return `https://www.youtube.com/embed/${videoId[1]}`;
  }
}
