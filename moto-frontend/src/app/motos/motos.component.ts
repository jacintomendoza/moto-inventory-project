import { Component, Input, OnInit } from '@angular/core';
import { MotoService } from '../moto.service';
import { Moto } from '../moto.model';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.scss']
})
export class MotosComponent implements OnInit {
  motos: Moto[] = [];
  selectedValue = 'Please select';
  values = ['Make', 'VIN', 'Type'];
  searchTerm = "";
  // @Input() 

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getMotos().subscribe((motos) => {
      this.motos = motos;
    })
  }

  test(valuetest: string) {
    console.log("this is a test!" + valuetest);
    
  }

  selectValue(selection: string){
    this.selectedValue = selection;
  }

  searchVin(searchTerm: string) {
    this.motoService.searchVin(searchTerm).subscribe(payload => {
      this.motos = payload;
    })
  }

}