import { LitElement, html, css, customElement, property } from "lit-element";

@customElement("kangrid-app")
export class KangridApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        height: 100vh;
      }

      main {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      div {
        text-align: center;
      }
    `;
  }

  @property({ type: String }) name = "World";

  handleNameChange() {
    this.name = "Web Components";
  }

  render() {
    return html`
      <main>
        <div>
          <kangrid-timer></kangrid-timer>
          <p>Hello, ${this.name}!</p>
          <button @click="${this.handleNameChange}">click me</button>
        </div>
      </main>
    `;
  }
}
