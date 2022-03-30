import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service';
import { Moto } from '../moto.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  motos: Moto[] = [];
  selectedValue = 'Please select';
  values = ['Make', 'VIN', 'Type'];
  searchTerm = "";
  choosenValue = "";

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getMotos().subscribe((motos) => {
      this.motos = motos;
    })
  }

  search() {
    switch(this.selectedValue) {
      case "Make": {
        this.searchMake();
        break;
      }
      case "VIN": {
        this.searchVin();
        break;
      }
      case "Type": {
        this.searchType();
        break;
      }
    }
  }

  selectValue(selection: string){
    this.selectedValue = selection;
    this.choosenValue = selection;
  }

  searchMake() {
    this.motoService.searchMake(this.searchTerm).subscribe(payload => {
      this.motos = payload;
      // console.log(this.searchTerm)
      console.log(payload);
    })
  }

  searchVin() {
    this.motoService.searchVin(this.searchTerm).subscribe(payload => {
      this.motos = payload;
    })
  }

  searchType() {
    this.motoService.searchType(this.searchTerm).subscribe(payload => {
      this.motos = payload;
    })
  }

}
