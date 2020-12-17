import { Component } from "@angular/core";

type Card = { isCollapsed: boolean };
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cards: Card[] = [];
  constructor() {
    this.cards[0] = { isCollapsed: false };
    this.cards[1] = { isCollapsed: true };
    this.cards[2] = { isCollapsed: true };
  }

  toggleCollapse(card: Card): void {
    this.cards.forEach(cardItem => {
      if (cardItem === card) {
        cardItem.isCollapsed = !cardItem.isCollapsed;
      } else {
        cardItem.isCollapsed = true;
      }
    });
  }

}
