import { Component, Host, h, getAssetPath } from "@stencil/core";

@Component({
  tag: "acme-stampa",
  styleUrl: "acme-stampa.css",
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeStampa {
  render() {
    return (
      <Host>
        <img src={getAssetPath("/assets/rep.svg")} alt="" />
        <img src={getAssetPath("/assets/wired.svg")} alt="" />
        <img src={getAssetPath("/assets/milanofinanza.svg")} alt="" />
        <img src={getAssetPath("/assets/sole.svg")} alt="" />
      </Host>
    );
  }
}
