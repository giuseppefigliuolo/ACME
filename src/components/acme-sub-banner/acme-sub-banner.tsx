import { Component, Host, h, getAssetPath, Prop } from "@stencil/core";

@Component({
  tag: "acme-sub-banner",
  styleUrl: "acme-sub-banner.css",
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeSubBanner {
  /** A title for the under-banner section */
  @Prop() subTitle: string;
  /** An hightlighted word for the title of the under-banner section */
  @Prop() boldWord: string;

  render() {
    return (
      <Host>
        <div class="container">
          <div class="ellipses">
            <img src={getAssetPath("/assets/ellipses.svg")} alt="" />
          </div>
          <div class="vettore">
            <img src={getAssetPath("/assets/vettore.svg")} alt="" />
          </div>
        </div>
        <div class="line">
          <img src={getAssetPath("/assets/line.svg")} alt="" />
        </div>
        <div class="title">
          <h2>
            {this.subTitle}
            <b> {this.boldWord}</b>
          </h2>
        </div>
      </Host>
    );
  }
}
