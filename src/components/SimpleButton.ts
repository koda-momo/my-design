import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

type ColorType = "red" | "blue" | null;
type OnClickType = () => void;

@customElement("simple-button")
export class SimpleButton extends LitElement {
  @property({ type: String })
  color: ColorType = null;

  @property({ type: String })
  onClick: OnClickType = () => {};

  @property({ type: String })
  label: string = "button";

  static styles = css`
    .simple-button-red {
      background: red;
      width: auto;
      height: 30px;
      border-radius: 5%;
      border: none;
      color: white;
    }
    .simple-button-blue {
      background: blue;
      width: auto;
      height: 30px;
      border-radius: 5%;
      border: none;
      color: white;
    }
  `;
  render() {
    return html`<button
      class="simple-button-${this.color}"
      @click="${this.onClick}"
    >
      ${this.label}
    </button>`;
  }
}
