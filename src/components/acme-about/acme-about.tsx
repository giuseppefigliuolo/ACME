import { Component, Host, h, getAssetPath } from "@stencil/core";

@Component({
  tag: "acme-about",
  styleUrl: "acme-about.css",
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeAbout {
  render() {
    return (
      <Host>
        <h2>COSA DICONO DI NOI</h2>
        <div class="banner">
          <div class="text">
            <p class="quote">
              "ACME ha reso <em>scalabile</em> ed <em>accessibile</em> quello
              che le banche hanno reso complesso e difficile da secoli!"
            </p>
            <p>Vincenzo Castaldi e C. S.R.L - Spazi Sostenibili</p>
          </div>
          <img src={getAssetPath("/assets/acme-people.png")} alt="" />
        </div>
      </Host>
    );
  }
}
