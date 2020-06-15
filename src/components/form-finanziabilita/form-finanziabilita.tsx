import { Component, Host, h, Element } from "@stencil/core";

@Component({
  tag: "form-finanziabilita",
  styleUrl: "form-finanziabilita.css",
  shadow: true,
})
export class FormFinanziabilita {
  // eslint-disable-next-line @stencil/element-type
  @Element() el: HTMLElement;

  componentDidRender() {
    const submit = this.el.shadowRoot.querySelector(
      ".submit"
    ) as HTMLInputElement;
    const privacy = this.el.shadowRoot.querySelector(
      ".privacy"
    ) as HTMLInputElement;
    submit.disabled = true;
    privacy.addEventListener("click", () => {
      privacy.checked ? (submit.disabled = false) : (submit.disabled = true);
    });
  }
  render() {
    return (
      <Host>
        <div class="form">
          <div class="flex-column titles">
            <h2>Verifica subito la finanziabilità</h2>
            <h3>Compila il form per avere subito un riscontro gratuito</h3>
          </div>
          <div class="flex-column data">
            <p>Email</p>
            <input
              type="text"
              placeholder="Inserisci la tua mail"
              class="input-text"
            />
            <p>Telefono</p>
            <input
              type="text"
              placeholder="Inserisci il tuo numero di telefono"
              class="input-text"
            />
          </div>
          <div class="flex-column data">
            <p>Partita IVA</p>
            <input
              type="text"
              placeholder="Inserisci la partita iva"
              class="input-text"
            />
            <p>Messaggio</p>
            <textarea placeholder="Inserisci il messaggio" />
          </div>
          <div class="flex-row">
            <input type="checkbox" name="" class="privacy" />
            <p>
              Dichiaro di aver preso visione dell'<a href="">informativa</a> e
              acconsento al trattamento dei miei dati personali
            </p>
            <input type="submit" class="submit"></input>
          </div>
        </div>
      </Host>
    );
  }
}
