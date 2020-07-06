import { Component, h, getAssetPath, Host  } from '@stencil/core';

@Component({
  tag: 'acme-menu',
  styleUrl: 'acme-menu.css',
  shadow: true,
  assetsDirs:["/assets"],
})
export class AcmeMenu {

  render() {
    return( 
    <Host>
      <section>
        <div class="logo">
            <a href="index.html"><img src={getAssetPath("/assets/logo.svg")} alt="logo"/></a>
        </div>
        <nav>
        <ul>
            <li> <a href="#">Finanziamenti</a></li>
            <li> <a href="#">Privati</a></li>
            <li> <a href="#">Aziende</a></li>
            <li> <a href="#">Chi siamo</a></li>
            <li> <a class="blue" href="#">Contattaci</a></li>
        </ul>
        </nav>
      </section>
    </Host>
    );
  }

}
