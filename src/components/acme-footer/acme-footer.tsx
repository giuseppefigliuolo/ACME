import { Component, Host, h, getAssetPath, Prop } from "@stencil/core";

@Component({
  tag: "acme-footer",
  styleUrl: "acme-footer.css",
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeFooter {
  /**
   * Footer main text
   */
  @Prop() footerText: string;

  render() {
    return (
      <Host>
        <footer>
          <div class="footer-content">
            <div class="logo">
              <img
                src={getAssetPath("/assets/logo-white.svg")}
                alt="logo-banner"
              />
            </div>
            <div class="social-container">
              <h3 class="seguici">SEGUICI</h3>
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <img
                      src={getAssetPath("/assets/icon-facebook.svg")}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={getAssetPath("/assets/icon-linkedin.svg")}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={getAssetPath("/assets/icon-twitter.svg")}
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-text">{this.footerText}</div>
          </div>
        </footer>
      </Host>
    );
  }
}
