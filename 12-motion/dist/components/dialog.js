import { BaseComponent } from "./component.js";
export class InputDialog extends BaseComponent {
    constructor() {
        super(`<section class="dialog">
                        <buttion class="close">&times;</buttion>
                        <div id="dialog__body"></div>
                        <button class="dialog__submit">ADD</button>
                    </section>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        const submitBtn = this.element.querySelector(".dialog__submit");
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener) {
        this.submitListener = listener;
    }
    addChild(child) {
        const body = this.element.querySelector("#dialog__body");
        child.attachTo(body);
    }
}
