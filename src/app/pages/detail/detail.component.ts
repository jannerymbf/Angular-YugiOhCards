import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: string;

  // Inyectamos ActivatedRoute para capturar el ID
  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
          // route: hace referencia a la ruta que está activada en este momento
          // snapshot: en el momento en el que cargue la ruta, le va hacer una captura a cómo está ahora la ruta
          // paramMap: entramos a la info de los parámetros
          // get: hacemos una solicitud del parámetro, esto sacamos de las rutas
    this.cardService.getCard(this.id).subscribe(res => console.log(res))
  }

}
