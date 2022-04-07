import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service';
import { Moto } from '../moto.model';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  motos: Moto[] = [];



  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getMotos().subscribe((motos) => {
      this.motos = motos;
    })
  }

  searchVin(searchTerm: string) {
    this.motoService.searchVin(searchTerm).subscribe(payload => {
      this.motos = payload;
    })
  }

  addNewMoto(newMoto: Moto) {
    this.motoService.addMoto(newMoto).subscribe(payload => {
      this.motos.push(payload)
    })
  }

  deleteMoto(moto: Moto) {
    this.motoService.deleteMoto(moto)
    .subscribe(() => this.motos = this.motos.filter((t) => t.id !== moto.id))
  }

}