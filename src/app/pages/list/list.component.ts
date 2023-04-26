import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/interfaces/card.interface';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards: Card[] = [];
  offset = 0;

  cardTextFC = new FormControl('');
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardTextFC.valueChanges.pipe(
      debounceTime(1000) // Ayuda a que después de un segundo recién se reconozca lo que escribió el usuario. Este es otro operador de Rxjs
    )
    .subscribe((res) => {
      console.log(res);
      this.cards = [];
      this.searchCards(res);
    })
    this.searchCards();
  }

  onScroll() {
    console.log("scrolled!!");
    if(this.cards.length < 100) {
      this.offset = 0;
    } else {
      this.offset += 100;
      this.searchCards();
    }
  }

  searchCards(cardName: string | null =  null) {
    this.cardService.getCards(cardName, this.offset).subscribe((res) => {
      console.log(res);
      this.cards = [...this.cards, ...res];
    })
  }

}
