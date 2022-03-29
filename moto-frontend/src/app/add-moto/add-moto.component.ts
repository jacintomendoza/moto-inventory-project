import { Component, OnInit } from '@angular/core';
import { Moto } from '../moto.model';

@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html',
  styleUrls: ['./add-moto.component.scss']
})
export class AddMotoComponent implements OnInit {
make: string  = '';
model: string = '';
vin: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('clicked!')
  }

}