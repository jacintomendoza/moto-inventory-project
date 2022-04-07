import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { Moto } from '../moto.model';

@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html',
  styleUrls: ['./add-moto.component.scss']
})
export class AddMotoComponent implements OnInit {
  @Output() addNewBike: EventEmitter<Moto> = new EventEmitter();

make: string  
type: string 
vin: string 
stock: number

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    const newMoto: Moto = {
      make: this.make,
      type: this.type,
      vin: this.vin,
      invCount: this.stock
    }
    
  this.addNewBike.emit(newMoto);

  console.log(newMoto)

  // this.make = '';
  // this.type = '';
  // this.vin = '';
  
    
  }

}