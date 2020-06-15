import { Component, Host, h,getAssetPath } from '@stencil/core';

@Component({
  tag: 'npm-central-banner',
  styleUrl: 'npm-central-banner.css',
  shadow: true,
  assetsDirs:["/assets"],
})
export class NpmCentralBanner {
  private bgStyle ={
    backgroundImage: `url("${getAssetPath("/assets/acme-business.jpg")}")`,
  }
  render() {
    return (
      <Host>
        <div class="container">
            <div class="velocita">
                <img src={getAssetPath("/assets/icon-velocita.svg")} alt="icon" /> 
                <h2>VELOCITA'</h2>
                <p>Richiedi una valutazione in 2 minuti. <br></br>
                Se la tua azienda è finanziabile, ricevi una proposta di finanziamento completa in 3 giorni.</p>
            </div>

            <div class="bgimg"  style={this.bgStyle}>
            <div class="trasparenza">
                <img src={getAssetPath("/assets/icon-trasparenza.svg")} alt="icon" /> 
                <h2>TRASPARENZA</h2>
                <p>Nella tua area personale trovi il piano di ammortamento sempre aggiornato insieme ad una copia del contratto.</p>
                </div>
            </div>

            <div class="semplicita">
                <img src={getAssetPath("/assets/icon-semplicita.svg")} alt="icon" /> 
                <h2>SEMPLICITA'</h2>
                <p>Zero burocrazia. Fai tutto online: <br></br>
                Accetti la proposta, ti identifichi e firmi il contratto. Nessuno scambio di carta</p>
            </div>
        </div>
      </Host>
    );
  }

}
