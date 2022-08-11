import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  
  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListPokemons.subscribe(
      res => {this.getAllPokemons = res.results;

      }
    )
  }

  public getsearch(value:string){
    const filter = this.getAllPokemons.filter((res: any) => {
        return !res.name.indexOf(value.toLowerCase())
    })
    this.getAllPokemons = filter;
  }

}
