import { Component, Host, h, Prop, State, Element } from "@stencil/core";
import { News } from "./news.interface";

@Component({
  tag: "acme-news-feed",
  styleUrl: "acme-news-feed.css",
  shadow: true,
})
export class AcmeNewsFeed {
  @Element() el: HTMLAcmeNewsFeedElement;
  /** A title for the under-banner section */
  @Prop() headerTitle: string;

  @State() news: Array<News> = [];
  @State() newsReady: boolean = false;

  private fetchNews = () => {
    fetch("https://fg-acme-server.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        this.news = data;
        this.newsReady = true;
      });
  };

  componentDidLoad() {
    this.fetchNews();
    // this.loadingNews();
  }

  render() {
    return (
      <Host>
        <div class="table-container">
          <div class="table">
            <div class="table-header">
              <h2>{this.headerTitle}</h2>
            </div>
            <div class="table-body">
              <ul class="un-list">
                {this.newsReady ? (
                  this.news.map((el) => (
                    <li>
                      <div class="container-news-n-date">
                        <p class="li-title">{el.title}</p>
                        <p class="li-date">{el.date}</p>
                      </div>
                      <p class="li-subtitle">{el.description}</p>
                    </li>
                  ))
                ) : (
                  <p class="loading">Caricamento...</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
