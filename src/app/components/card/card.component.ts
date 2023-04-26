import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: Card; // el signo de admiración indica que la interfaz va a llegar y se va a inicializar

  constructor() { }

  ngOnInit(): void {
  }

}
