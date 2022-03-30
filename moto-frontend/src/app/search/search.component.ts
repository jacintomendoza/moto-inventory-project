import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service';
import { Moto } from '../moto.model';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  motos: Moto[] = [];
  selectedValue = 'Filter by...';
  values = ['Make', 'VIN', 'Type'];
  searchTerm = "";
  choosenValue = "";
  validationForm: FormGroup;

  constructor(private motoService: MotoService, public fb: FormBuilder) {
    this.validationForm = fb.group({
      searchFormEx: [null, Validators.required],
  });}

  ngOnInit(): void {
    this.motoService.getMotos().subscribe((motos) => {
      this.motos = motos;
    })
  }

  get searchFormEx() { return this.validationForm.get('searchFormEx');}

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
    this.motoService.searchMake(this.validationForm.value.searchFormEx).subscribe(payload => {
      this.motos = payload;
    })
  }

  searchVin() {
    this.motoService.searchVin(this.validationForm.value.searchFormEx).subscribe(payload => {
      this.motos = payload;
    })
  }

  searchType() {
    this.motoService.searchType(this.validationForm.value.searchFormEx).subscribe(payload => {
      this.motos = payload;
    })
  }

}
