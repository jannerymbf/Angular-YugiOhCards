import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: string;
  card$!: Observable<Card>; // La conveción paa crear un observable es agregarle un signo de dolar al final

  // Inyectamos ActivatedRoute para capturar el ID
  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
          // route: hace referencia a la ruta que está activada en este momento
          // snapshot: en el momento en el que cargue la ruta, le va hacer una captura a cómo está ahora la ruta
          // paramMap: entramos a la info de los parámetros
          // get: hacemos una solicitud del parámetro, esto sacamos de las rutas

    // this.cardService.getCard(this.id).subscribe(res => console.log(res))
    this.card$ = this.cardService.getCard(this.id);
    // Cuando utilizamos un subscribe usualmente queremos poner la respuesta en una variable nuestra y no tiene sentido utilizar esta variable extra si tan solo vamos a mostrar los datos en el html. Para eso hay un pipe de Angular que nos ayuda a eso, a suscrbirnos desde el html
    //1. Para eso creo una variable que va a ser un observable 'Card'
    //2. Guardamos el getCard en card$
    //3. Luego vamos al html, escribimos ngIf y utilizamos el pipe 'async' as card.
  }

}
