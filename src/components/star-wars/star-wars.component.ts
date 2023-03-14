import { Component, OnInit } from '@angular/core';
import { PersonagensStarWarsService } from 'src/app/personagens-star-wars.service';
import { PersonagemClass } from 'src/app/personagem-class';
@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  public personagens: PersonagemClass[] = [];

  constructor(private _service: PersonagensStarWarsService) {}

  ngOnInit(): void {
    this._service.getPersonagens().subscribe(
      (res) => {
        this.personagens = res
      }
    )
  }
  
  // public getPersonagensFromService() {

  // }

}
