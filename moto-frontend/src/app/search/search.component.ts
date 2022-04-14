import { Component, OnInit, Output, Input, EventEmitter, SimpleChange } from '@angular/core';
import { MotoService } from '../moto.service';
import { Moto } from '../moto.model';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() onDeleteMoto : EventEmitter<Moto> = new EventEmitter();
  motos: Moto[] = [];
  selectedValue = 'Filter by...';
  values = ['Make', 'VIN', 'Type'];
  searchTerm = "";
  choosenValue = "";
  validationForm: FormGroup;
  isLoadingBikes: boolean = false;
  activeReset: boolean = false;

  @Input() motos_updated : Moto[];

  constructor(private motoService: MotoService, public fb: FormBuilder) {
    this.validationForm = fb.group({
      searchFormEx: [null, Validators.required],
  });}

  ngOnInit(): void {
    this.isLoadingBikes = true;
    this.motoService.getMotos().subscribe((motos) => {
      this.motos = motos;
      this.isLoadingBikes = false;
    })
  }

  ngOnChanges(changes: SimpleChange) {
    this.motos = this.motos_updated;
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

  reload() {
    this.isLoadingBikes = true;
    this.motoService.getMotos().subscribe((motos) => {
      this.motos = motos;
      this.isLoadingBikes = false;
      this.activeReset = false;
    })
  }

  selectValue(selection: string){
    this.selectedValue = selection;
    this.choosenValue = selection;
  }

  searchMake() {
    this.isLoadingBikes = true;
    this.motoService.searchMake(this.validationForm.value.searchFormEx).subscribe(payload => {
      this.motos = payload;
      this.isLoadingBikes = false;
      this.activeReset = true;
    })
  }

  searchVin() {
    this.isLoadingBikes = true;
    this.motoService.searchVin(this.validationForm.value.searchFormEx).subscribe(payload => {
      this.motos = payload;
      this.isLoadingBikes = false;
      this.activeReset = true;
    })
  }

  searchType() {
    this.isLoadingBikes = true;
    this.motoService.searchType(this.validationForm.value.searchFormEx).subscribe(payload => {
      this.motos = payload;
      this.isLoadingBikes = false;
      this.activeReset = true;
    })
  }

  onDelete(moto: Moto) {
    this.onDeleteMoto.emit(moto)
  }

}
