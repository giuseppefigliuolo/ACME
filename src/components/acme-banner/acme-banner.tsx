import { Component, Host, h, Prop, getAssetPath } from "@stencil/core";

@Component({
  tag: "acme-banner",
  styleUrl: "acme-banner.css",
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeBanner {
  /**
   * Title for the banner
   */
  @Prop() titleBanner: string;
  /**
   * Text written inside the button
   */
  @Prop() callToAction: string;

  private bgStyle = {
    background: `url("${getAssetPath(
      "/assets/palazzo.png"
    )}") no-repeat center center`,
  };

  render() {
    return (
      <Host>
        <div class="banner" style={this.bgStyle}>
          <h2>{this.titleBanner}</h2>
          <button>
            <p>{this.callToAction}</p>
          </button>
        </div>
      </Host>
    );
  }
}
