import { LitElement, html, css, customElement, property } from "lit-element";

@customElement("kangrid-timer")
export class KangridTimer extends LitElement {
  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  @property({ type: Number }) seconds = 0;

  constructor() {
    super();

    setInterval(() => {
      this.seconds += 1;
    }, 1000);
  }

  render() {
    return html` <p>${this.seconds}</p> `;
  }
}
