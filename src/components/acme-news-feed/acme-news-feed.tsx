import { Component, Host, h, Prop, State } from "@stencil/core";
import { News } from "./news.interface";

@Component({
  tag: "acme-news-feed",
  styleUrl: "acme-news-feed.css",
  shadow: true,
})
export class AcmeNewsFeed {
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
              <ul>
                {
                  this.news.map((el) => (
                    <li>
                      <div class="container-news-n-date">
                        <p class="li-title">{el.title}</p>
                        <p class="li-date">{el.date}</p>
                      </div>
                      <p class="li-subtitle">{el.description}</p>
                    </li>
                  ))
                  /* <li>
                  <div class="container-news-n-date">
                    <p class="li-title">
                      Superbonus casa 110%, come non sbagliare nel labirinto
                      dell’agevolazione
                    </p>
                    <p class="li-date">23/06/2020</p>
                  </div>
                  <p class="li-subtitle">
                    Una guida da scaricare per gli abbonati di 24+ con nuove
                    indicazioni sulla mappa degli interventi possibili per
                    realizzare una casa non energivora e sicura
                  </p>
                </li> */
                }
              </ul>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
