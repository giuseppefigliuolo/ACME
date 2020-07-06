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
    submit.disabled = true;
    const form = this.el.shadowRoot.querySelector(".form") as HTMLElement;
    const telefono = form.querySelector(".telefono") as HTMLInputElement;
    const mail = form.querySelector(".mail") as HTMLInputElement;
    const message = form.querySelector(".messaggio") as HTMLInputElement;
    const privacy = form.querySelector(".privacy") as HTMLInputElement;
    const formCheck = () => {
      let telefonoOk = false;
      let i = 0;
      for (i = 0; i < telefono.value.length; i++) {
        if (telefono.value.length === 10) {
          telefonoOk = true;
          break;
        }
      }
      let mailOk = false;
      for (i = 0; i < mail.value.length; i++) {
        if (
          mail.value.length > 0 &&
          mail.value.match(/[a-z]/i) &&
          mail.value.includes("@") &&
          mail.value.includes(".")
        ) {
          mailOk = true;
          break;
        }
      }
      let messageOk = false;
      for (i = 0; i < message.value.length; i++) {
        if (message.value.length > 0) {
          messageOk = true;
          break;
        }
      }
      if (mailOk && telefonoOk && messageOk && privacy.checked === true) {
        submit.disabled = false;
      } else {
        submit.disabled = true;
      }
    };
    form.addEventListener("keyup", () => {
      formCheck();
    });
    privacy.addEventListener("click", () => {
      formCheck();
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
            <p>Email *</p>
            <input
              type="text"
              placeholder="Inserisci la tua mail"
              class="mail"
            />
            <p>Telefono *</p>
            <input
              type="number"
              placeholder="Inserisci il tuo numero di telefono"
              class="telefono"
            />
          </div>
          <div class="flex-column data">
            <p>Partita IVA</p>
            <input type="text" placeholder="Inserisci la partita iva" />
            <p>Messaggio *</p>
            <textarea placeholder="Inserisci il messaggio" class="messaggio" />
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
