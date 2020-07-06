import { Component, Host, h, getAssetPath } from "@stencil/core";

@Component({
  tag: "acme-private-corporate",
  styleUrl: "acme-private-corporate.css",
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmePrivateCorporate {
  render() {
    return (
      <Host>
        <div class="container">
          <div class="private">
            <img src={getAssetPath("/assets/privato.svg")} alt="" />
            <h2>Privati</h2>
            <p>
              ACME ti aiuta a realizzare tutti i tuoi progetti, presenti e
              futuri. I nostri finanziamenti per privati sono ideali anche per
              chi non ha mai richiesto crediti, indipendentemente dal lavoro
              svolto. Il nostro credito privato, con un tasso che varia dal 4,7%
              e al 5,9%, è tra i più convenienti sul mercato. Fino ad oggi più
              di 15 mila clienti hanno beneficiato del nostro conveniente tasso
              d’interesse al 4,7%.
            </p>
          </div>
          <div class="corporate">
            <img src={getAssetPath("/assets/business.svg")} alt="" />
            <h2>Corporate</h2>
            <p>
              Crediamo nella potenzialità della tua azienda. Offriamo una serie
              di soluzioni create su misura per agevolare lo sviluppo della tua
              azienda, aiutandola ad essere davvero competitiva. I nostri
              finanziamenti offrono tutto il sostegno di cui hai bisogno:
              investire in nuovi progetti, dare una svolta “verde” alla tua
              impresa, uscire dai confini nazionali e molto altro. Scegli il
              finanziamento giusto per le tue necessità.
            </p>
          </div>
        </div>
      </Host>
    );
  }
}
